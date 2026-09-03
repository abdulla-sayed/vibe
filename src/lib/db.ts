import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
/*
 *
 * Here, why is the prisma file stored like this it's because the if we just use new PrismaClient(), now in every hot reload (when app is refreshed when new saves occur every time)
 * it is going to initialize a new client each time and this causes problems and inconsistencies, hence why we store it in a global object globalForPrisma and keep reusing it.
 * */
