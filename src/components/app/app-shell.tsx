import type { ReactNode } from "react";

export type AppShellProps = {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
};

export function AppShell({ sidebar, topbar, children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {sidebar}
        <div className="flex min-w-0 flex-col">
          {topbar}
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}