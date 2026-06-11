import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const client: PrismaClient = prisma;

void client;