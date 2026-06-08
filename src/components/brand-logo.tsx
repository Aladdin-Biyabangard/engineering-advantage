import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Header/footer lockup vs favicon-sized mark */
  size?: "sm" | "md";
};

const sizeClass = {
  sm: "size-7",
  md: "size-9",
} as const;

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={36}
      height={36}
      className={cn("shrink-0 object-contain", sizeClass[size], className)}
      aria-hidden
    />
  );
}
