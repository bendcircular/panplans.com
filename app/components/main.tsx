/**
 * Main Component - FlowFork Design System
 * Primary content wrapper with proper background color
 */
export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">{children}</main>
  );
};
