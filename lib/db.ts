import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db: PrismaClient = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

/*
 globalThis.prisma configuration is required in development because the hot reload happen and
 it creates multiple prisma client instance
 */
