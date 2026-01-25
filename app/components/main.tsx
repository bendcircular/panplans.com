/**
 * Main Component - FlowFork Design System
 * Primary content wrapper with proper background color
 * Includes top padding to account for fixed header
 */
export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-[var(--color-background)] pt-[var(--header-height)]">
      {children}
    </main>
  );
};
