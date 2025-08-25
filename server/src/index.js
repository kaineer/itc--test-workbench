import Fastify from "fastify";
import { host, port } from './config.js';

import cors from "@fastify/cors";
import { join, dirname } from "path";
import { readdirSync } from "fs";

const __dirname = dirname(import.meta.url.slice("file://".length));

const fastify = Fastify();
await fastify.register(cors, {});

const useRoutes = async (name) => {
  const { default: routes } = await import(join(__dirname, "routes", name + ".js"));

  return routes(fastify);
}

fastify.get("/", (req, res) => {
  res.send({ hello: "world" });
});

await useRoutes("courses");

await fastify.listen({ host, port }, (err, address) => {
  console.log(" [DEBUG] Devserver is listening on " + address);
});
