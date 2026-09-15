import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    include: ["tests/integration/**/*.test.ts"],
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "./src"),
      "@": resolve(__dirname, "./src"),
    },
  },
});
