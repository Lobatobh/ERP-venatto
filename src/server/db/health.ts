import "server-only";

import { prisma } from "@/lib/prisma";

export type DatabaseHealthResult = {
  ok: boolean;
  timestamp: string;
};

export async function getDatabaseHealth(): Promise<DatabaseHealthResult> {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return {
      ok: true,
      timestamp: new Date().toISOString(),
    };
  } catch {
    return {
      ok: false,
      timestamp: new Date().toISOString(),
    };
  }
}