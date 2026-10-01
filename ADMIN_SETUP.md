# Admin setup

The admin desk uses the local SQLite database configured in `.env`.

1. Create or sync the database with `npm run db:push`.
2. Create the first editor account by setting `ADMIN_EMAIL`, `ADMIN_PASSWORD` (at least 12 characters), and optionally `ADMIN_NAME`, then run `npm run db:admin`.
3. Sign in at `/admin/login`. The newsroom is at `/admin`.

For production, set `DATABASE_URL`, `NEXTAUTH_URL`, and a strong `NEXTAUTH_SECRET` in the hosting environment. The current Prisma schema uses SQLite for local development. Serverless hosting needs a persistent production database and a Prisma schema configured for that database. Do not copy the local `.env` or `dev.db` to production.
