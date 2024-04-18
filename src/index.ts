import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";
import { serve } from "@hono/node-server";

const app = new Hono();
const prisma = new PrismaClient();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/users", async (c) => {
  const users = await prisma.user.findMany();
  return c.json(users);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
