import "server-only";

import type { CustomerStatus } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { getCurrentUserTenantAccess } from "@/server/saas/access";

export type CustomerListItem = {
  id: string;
  name: string;
  document: string | null;
  email: string | null;
  phone: string | null;
  city: string | null;
  state: string | null;
  source: string | null;
  status: CustomerStatus;
  notes: string | null;
  createdAt: Date;
};

export type CustomerSummary = {
  total: number;
  leads: number;
  customers: number;
  proposals: number;
};

export type CustomersPageData = {
  customers: CustomerListItem[];
  summary: CustomerSummary;
  canCreate: boolean;
  hasTenantAccess: boolean;
};

const emptySummary: CustomerSummary = {
  total: 0,
  leads: 0,
  customers: 0,
  proposals: 0,
};

export async function getCustomersPageData(): Promise<CustomersPageData> {
  const access = await getCurrentUserTenantAccess();

  if (!access.tenantId) {
    return {
      customers: [],
      summary: emptySummary,
      canCreate: false,
      hasTenantAccess: false,
    };
  }

  const [customers, total, leads, customerCount, proposals] = await Promise.all([
    prisma.customer.findMany({
      where: { tenantId: access.tenantId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        document: true,
        email: true,
        phone: true,
        city: true,
        state: true,
        source: true,
        status: true,
        notes: true,
        createdAt: true,
      },
    }),
    prisma.customer.count({ where: { tenantId: access.tenantId } }),
    prisma.customer.count({ where: { tenantId: access.tenantId, status: "LEAD" } }),
    prisma.customer.count({ where: { tenantId: access.tenantId, status: "CUSTOMER" } }),
    prisma.customer.count({ where: { tenantId: access.tenantId, status: "PROPOSAL" } }),
  ]);

  return {
    customers,
    summary: {
      total,
      leads,
      customers: customerCount,
      proposals,
    },
    canCreate: access.isOwner,
    hasTenantAccess: true,
  };
}