# Docker deploy (Ingress consultancy frontend)

Static production image: Vite build + TanStack Start prerender, served by nginx. No volume mounts at runtime.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) running on Windows
- Docker Hub account with push access to your namespace
- Node is **not** required on the host for deploy (build runs inside Docker)

## One-time setup

1. Copy credentials template:

   ```powershell
   Copy-Item gradle.properties.example gradle.properties
   ```

2. Edit `gradle.properties` (local only, gitignored):

   ```properties
   dockerHubUsername=ingressgroup
   dockerHubPassword=<token-or-password>
   dockerRepoUrl=ingressgroup
   dockerImageName=ingress-consultancy
   ```

3. Optional local dev env:

   ```powershell
   Copy-Item .env.example .env.local
   ```

## Build and push

From repo root:

```powershell
.\build-and-push.ps1 -Tag "v1.0.0"
```

Custom canonical site URL (baked into SEO meta tags at build time):

```powershell
.\build-and-push.ps1 -Tag "v1.0.0" -SiteUrl "https://ingress.engineering"
```

Optional Google Search Console verification:

```powershell
.\build-and-push.ps1 -Tag "v1.0.0" -SiteUrl "https://ingress.engineering" -GoogleSiteVerification "your-code"
```

## Run the image

```powershell
docker run -p 80:80 ingressgroup/ingress-consultancy:v1.0.0
```

Open http://localhost

## Image name pattern

```
{dockerRepoUrl}/{dockerImageName}:{Tag}
```

Default: `ingressgroup/ingress-consultancy:<tag>`

Override image name via `dockerImageName` in `gradle.properties`.

## Build-time environment variables

This project is a **marketing/consultancy site** with no backend API client.

| Variable | Purpose | Set by |
|----------|---------|--------|
| `VITE_SITE_URL` | Canonical URL for SEO, OG tags, JSON-LD | `-SiteUrl` / Dockerfile `ARG` |
| `VITE_GOOGLE_SITE_VERIFICATION` | Optional Google meta verification | `-GoogleSiteVerification` |

> **Note:** The stay-board-ui reference uses `-FrontendApiUrl` → `VITE_API_URL`. This repo does not call an API; use `-SiteUrl` instead.

Used in: `src/lib/seo.ts`

## Project build details

| Item | Value |
|------|--------|
| Package manager | npm (`package-lock.json`, `npm ci`) |
| Build command (Docker) | `node scripts/build-static.mjs` (wraps `npm run build`) |
| Build command (local) | `npm run build` |
| Output (nginx root) | `dist/client` (prerendered HTML + assets) |
| Node in Docker | 20-alpine (builder stage) |

## Troubleshooting

- **Docker daemon not available** — start Docker Desktop, wait until it is healthy, retry.
- **Docker Hub login failed** — check `dockerHubUsername` / `dockerHubPassword` in `gradle.properties`; prefer an access token over account password.
- **Build failed** — fix errors locally with `npm run build` (Node 20+ recommended). Docker uses Node 20 inside the image.
- **Wrong SEO URLs after deploy** — rebuild with the correct `-SiteUrl`; values are fixed at image build time, not at `docker run`.

## Security

- Never commit `gradle.properties` (listed in `.gitignore`).
- Rotate Docker Hub credentials if they were ever committed or shared.
