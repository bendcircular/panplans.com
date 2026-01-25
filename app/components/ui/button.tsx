import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

/**
 * Button Component - FlowFork Design System
 *
 * Primary CTA (Black Button):
 * - Background: #0A0A0A
 * - Text: White, 16pt light
 * - Shape: Rounded pill (border-radius: 100px)
 * - Padding: 16px vertical, 32px horizontal
 * - Hover: #1A1A1A (subtle, no shadow)
 * - Disabled: #F5F5F5 background, #BDBDBD text
 *
 * Secondary Actions:
 * - Ghost style: transparent with 1px #E0E0E0 border
 * - Text: #0A0A0A
 * - Same shape and padding as primary
 */

const buttonVariants = cva(
  // Base styles - all buttons
  [
    "inline-flex items-center justify-center gap-2",
    "font-light text-base", // 16pt light weight (design: never use bold)
    "rounded-full", // Pill shape (100px radius)
    "transition-button", // 150ms ease transition
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    // Minimum touch target: 44px height
    "min-h-[2.75rem]", // 44px
  ],
  {
    variants: {
      variant: {
        // Primary CTA - Black button
        primary: [
          "bg-[var(--color-btn-primary-bg)]",
          "text-[var(--color-btn-primary-text)]",
          "hover:bg-[var(--color-btn-primary-hover)]",
          "focus-visible:ring-[var(--color-focus-ring)]",
          "disabled:bg-[var(--color-btn-disabled-bg)]",
          "disabled:text-[var(--color-btn-disabled-text)]",
        ],
        // Secondary - Ghost with border
        secondary: [
          "bg-transparent",
          "text-[var(--color-btn-secondary-text)]",
          "border border-[var(--color-btn-secondary-border)]",
          "hover:border-[var(--color-foreground)]",
          "hover:bg-[var(--color-hover-bg)]",
          "focus-visible:ring-[var(--color-focus-ring)]",
          "disabled:border-[var(--color-btn-disabled-bg)]",
          "disabled:text-[var(--color-btn-disabled-text)]",
        ],
        // Ghost - No border, subtle hover
        ghost: [
          "bg-transparent",
          "text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-hover-bg)]",
          "focus-visible:ring-[var(--color-focus-ring)]",
          "disabled:text-[var(--color-btn-disabled-text)]",
        ],
        // Destructive - Error actions
        destructive: [
          "bg-[var(--color-error)]",
          "text-white",
          "hover:bg-[var(--color-error)]/90",
          "focus-visible:ring-[var(--color-error)]",
          "disabled:bg-[var(--color-btn-disabled-bg)]",
          "disabled:text-[var(--color-btn-disabled-text)]",
        ],
        // Link style
        link: [
          "text-[var(--color-text-primary)]",
          "underline-offset-4",
          "hover:underline",
          "p-0 h-auto min-h-0",
        ],
      },
      size: {
        // Default: 16px vertical, 32px horizontal padding
        default: "px-8 py-4",
        // Small: 12px vertical, 24px horizontal
        sm: "px-6 py-3 text-sm min-h-[2.5rem]",
        // Large: 20px vertical, 40px horizontal
        lg: "px-10 py-5 text-lg",
        // Icon only
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (e.g., for links) */
  asChild?: boolean;
  /** Loading state - shows spinner and disables interaction */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, disabled, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // When asChild is true, Slot requires exactly one child element
    // Don't render loading spinner alongside children in that case
    if (asChild) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
