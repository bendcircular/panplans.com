import * as React from "react";
import { cn } from "~/lib/utils";

/**
 * Card Component - FlowFork Design System
 *
 * Standard Card:
 * - Border: 1px #F0F0F0 (barely visible)
 * - Border-radius: 16px (soft, not pill-shaped)
 * - Padding: 24px
 * - Shadow: NONE (shadows feel heavy, we want air)
 * - Hover: Border changes to #E0E0E0 (subtle acknowledgment)
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the card is interactive (shows hover state) */
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Base styles
        "bg-[var(--color-card-bg)]",
        "border border-[var(--color-card-border)]",
        "rounded-[1rem]", // 16px border radius
        "p-6", // 24px padding
        // Interactive hover state
        interactive && [
          "transition-calm",
          "hover:border-[var(--color-card-border-hover)]",
          "cursor-pointer",
        ],
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      // Typography: size for hierarchy, never bold
      "text-xl font-normal leading-tight tracking-tight",
      "text-[var(--color-text-primary)]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-base font-light",
      "text-[var(--color-text-muted)]",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
