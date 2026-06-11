import { NextResponse } from "next/server";

import { getDatabaseHealth } from "@/server/db/health";

export const dynamic = "force-dynamic";

function isAuthorized(request: Request) {
  if (process.env.NODE_ENV !== "production") {
    return true;
  }

  const token = process.env.INTERNAL_HEALTHCHECK_TOKEN;

  if (!token) {
    return false;
  }

  return request.headers.get("x-internal-health-token") === token;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, timestamp: new Date().toISOString() }, { status: 404 });
  }

  const health = await getDatabaseHealth();

  return NextResponse.json(health, { status: health.ok ? 200 : 503 });
}