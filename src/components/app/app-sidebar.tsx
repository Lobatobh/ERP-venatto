import Link from "next/link";

import { appNavigationItems } from "@/components/app/navigation";

export function AppSidebar() {
  return (
    <aside className="border-b bg-muted/30 lg:border-b-0 lg:border-r">
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Venatto
          </p>
          <p className="text-xl font-semibold tracking-normal">VENATTO ERP</p>
        </div>
        <nav className="grid gap-1">
          {appNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}