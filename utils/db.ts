import { PrismaClient } from "@prisma/client";

// Declare a global variable 'prisma' that is of type PrismaClient | undefined
// This ensures TypeScript knows what type 'global.prisma' should be
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export default prisma;
