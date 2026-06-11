import type { DatabaseHealthResult } from "@/server/db/health";
import { getDatabaseHealth } from "@/server/db/health";

const healthcheck: () => Promise<DatabaseHealthResult> = getDatabaseHealth;

void healthcheck;