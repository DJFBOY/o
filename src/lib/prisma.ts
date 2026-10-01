import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { rexolPrisma?: PrismaClient };

export const prisma = globalForPrisma.rexolPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.rexolPrisma = prisma;
