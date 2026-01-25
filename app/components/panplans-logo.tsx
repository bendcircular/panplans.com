import { cn } from "~/lib/utils";

/**
 * PanPlans Logo Component - Frying pan with chef's hat
 *
 * Design: A frying pan viewed from above with a chef's hat silhouette
 * inside. Matches the app icon design for brand consistency.
 *
 * The logo adapts to current text color via currentColor, making it
 * compatible with both light and dark modes when proper text colors
 * are set on parent elements.
 */
interface PanPlansLogoProps {
  className?: string;
  /** Size in pixels (applied to both width and height) */
  size?: number;
}

export function PanPlansLogo({ className, size = 24 }: PanPlansLogoProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Frying pan body - main circle */}
      <circle cx="45" cy="50" r="40" fill="currentColor" />

      {/* Pan inner ring - creates the lip/rim effect */}
      <circle
        cx="45"
        cy="50"
        r="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="opacity-40"
      />

      {/* Pan handle */}
      <rect
        x="82"
        y="44"
        width="16"
        height="12"
        rx="2"
        fill="currentColor"
      />
      {/* Handle rivet/screw */}
      <circle cx="90" cy="50" r="2" className="fill-[var(--color-background)]" />

      {/* Chef's hat - white/background color to contrast with pan */}
      <g className="fill-[var(--color-background)]">
        {/* Hat top - three rounded bumps */}
        <circle cx="32" cy="38" r="8" />
        <circle cx="45" cy="35" r="9" />
        <circle cx="58" cy="38" r="8" />
        {/* Hat body - rectangular base */}
        <rect x="32" y="42" width="26" height="20" />
      </g>
    </svg>
  );
}

/**
 * Alternative version with explicit colors for contexts
 * where CSS variables might not be available
 */
export function PanPlansLogoStatic({
  className,
  size = 24,
  variant = "dark",
}: PanPlansLogoProps & { variant?: "dark" | "light" }) {
  const panColor = variant === "dark" ? "#0A0A0A" : "#FFFFFF";
  const hatColor = variant === "dark" ? "#FFFFFF" : "#0A0A0A";

  return (
    <svg
      className={cn("shrink-0", className)}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Frying pan body */}
      <circle cx="45" cy="50" r="40" fill={panColor} />

      {/* Pan inner ring */}
      <circle
        cx="45"
        cy="50"
        r="32"
        stroke={hatColor}
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Pan handle */}
      <rect x="82" y="44" width="16" height="12" rx="2" fill={panColor} />
      {/* Handle rivet */}
      <circle cx="90" cy="50" r="2" fill={hatColor} />

      {/* Chef's hat */}
      <g fill={hatColor}>
        <circle cx="32" cy="38" r="8" />
        <circle cx="45" cy="35" r="9" />
        <circle cx="58" cy="38" r="8" />
        <rect x="32" y="42" width="26" height="20" />
      </g>
    </svg>
  );
}
