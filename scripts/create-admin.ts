import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

process.env.DATABASE_URL ??= "file:./dev.db";

const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD;
const name = process.env.ADMIN_NAME?.trim() || "RexolNews Editor";

if (!email || !password || password.length < 12) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD (at least 12 characters) before creating an admin.");
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash(password!, 12);
  await prisma.adminUser.upsert({
    where: { email: email! },
    update: { name, passwordHash, role: "admin" },
    create: { email: email!, name, passwordHash, role: "admin" }
  });
  console.log(`Admin account ready for ${email}`);
}

main().catch((error) => {
  console.error("Could not create admin account", error);
  process.exitCode = 1;
}).finally(async () => {
  await prisma.$disconnect();
});
