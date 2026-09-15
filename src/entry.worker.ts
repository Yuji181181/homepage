export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // @ts-ignore - TanStack Start will replace this during build
    const { default: handler } = await import("../dist/server/server.js");
    return handler.fetch(request, env, ctx);
  },
};

interface Env {
  DB: D1Database;
  R2: R2Bucket;
}
