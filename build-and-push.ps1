#.\build-and-push.ps1 -Tag "v2.0.3"
#.\build-and-push.ps1 -Tag "v2.0.3" -SiteUrl "https://ingress.engineering"
param(
    [Parameter(Mandatory = $true)]
    [string]$Tag,

    [Parameter(Mandatory = $false)]
    [string]$SiteUrl = "https://ingress.engineering",

    [Parameter(Mandatory = $false)]
    [string]$GoogleSiteVerification = "",

    [Parameter(Mandatory = $false)]
    [string]$PropertiesFile = "gradle.properties"
)

$ErrorActionPreference = "Stop"

function Get-PropertyValue {
    param(
        [string]$Content,
        [string]$Key
    )

    $pattern = "(?m)^\s*$([regex]::Escape($Key))\s*=\s*(.+)\s*$"
    $match = [regex]::Match($Content, $pattern)
    if ($match.Success) {
        return $match.Groups[1].Value.Trim()
    }
    return $null
}

if (!(Test-Path $PropertiesFile)) {
    throw "Properties file not found: $PropertiesFile"
}

$propertiesContent = Get-Content $PropertiesFile -Raw
$dockerHubUsername = Get-PropertyValue -Content $propertiesContent -Key "dockerHubUsername"
$dockerHubPassword = Get-PropertyValue -Content $propertiesContent -Key "dockerHubPassword"
$dockerRepoUrl = Get-PropertyValue -Content $propertiesContent -Key "dockerRepoUrl"
$dockerImageName = Get-PropertyValue -Content $propertiesContent -Key "dockerImageName"

if ([string]::IsNullOrWhiteSpace($dockerHubUsername)) {
    throw "dockerHubUsername not found in $PropertiesFile"
}
if ([string]::IsNullOrWhiteSpace($dockerHubPassword)) {
    throw "dockerHubPassword not found in $PropertiesFile"
}
if ([string]::IsNullOrWhiteSpace($dockerRepoUrl)) {
    $dockerRepoUrl = $dockerHubUsername
}
if ([string]::IsNullOrWhiteSpace($dockerImageName)) {
    $dockerImageName = "ingress-consultancy"
}

$frontendImage = "$dockerRepoUrl/${dockerImageName}:$Tag"

Write-Host "Docker login check..." -ForegroundColor Cyan
docker info | Out-Null
if ($LASTEXITCODE -ne 0) {
    throw "Docker daemon is not available. Please start Docker Desktop and try again."
}

Write-Host "Docker Hub login..." -ForegroundColor Cyan
$dockerHubPassword | docker login --username $dockerHubUsername --password-stdin
if ($LASTEXITCODE -ne 0) {
    throw "Docker Hub login failed."
}

Write-Host "Building frontend image: $frontendImage" -ForegroundColor Yellow
Write-Host "  VITE_SITE_URL=$SiteUrl" -ForegroundColor DarkGray

$buildArgs = @(
    "build",
    "-t", $frontendImage,
    "-f", "Dockerfile",
    "--build-arg", "VITE_SITE_URL=$SiteUrl"
)

if (-not [string]::IsNullOrWhiteSpace($GoogleSiteVerification)) {
    $buildArgs += @("--build-arg", "VITE_GOOGLE_SITE_VERIFICATION=$GoogleSiteVerification")
    Write-Host "  VITE_GOOGLE_SITE_VERIFICATION=(set)" -ForegroundColor DarkGray
}

$buildArgs += "."

& docker @buildArgs
if ($LASTEXITCODE -ne 0) {
    throw "Frontend docker build failed. Image push skipped."
}

Write-Host "Pushing frontend image..." -ForegroundColor Green
docker push $frontendImage
if ($LASTEXITCODE -ne 0) {
    throw "Frontend docker push failed."
}

Write-Host ""
Write-Host "Done." -ForegroundColor Green
Write-Host "Frontend: $frontendImage"
Write-Host "Run:    docker run -p 80:80 $frontendImage"
