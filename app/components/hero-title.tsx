import { cn } from "~/lib/utils";

type HeroTitleSize = "default" | "large";

interface HeroTitleProps {
  children: React.ReactNode;
  size?: HeroTitleSize;
  skew?: boolean;
  className?: string;
}

const sizeClasses: Record<HeroTitleSize, string> = {
  default: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[0.9]",
  large: "text-6xl md:text-8xl lg:text-9xl mb-8 leading-none",
};

export function HeroTitle({
  children,
  size = "default",
  skew = false,
  className,
}: HeroTitleProps) {
  return (
    <h1
      className={cn(
        "font-black tracking-tighter text-balance",
        sizeClasses[size],
        skew && "-skew-y-2",
        className
      )}
    >
      {children}
    </h1>
  );
}

interface HeroTitleAccentProps {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  className?: string;
}

export function HeroTitleAccent({
  children,
  variant = "primary",
  className,
}: HeroTitleAccentProps) {
  return (
    <span
      className={cn(
        variant === "primary" ? "text-primary" : "text-accent-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
