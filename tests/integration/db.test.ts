import { describe, it, expect } from "vitest";
import * as schema from "#/db/schema";

describe("Database Schema Integration", () => {
  // Note: These tests verify the schema exports exist
  // Full D1 integration tests require Cloudflare Workers environment (CI/CD)

  it("should have contacts table defined", () => {
    expect(schema.contacts).toBeDefined();
    expect(typeof schema.contacts).toBe("object");
  });

  it("should have projects table defined", () => {
    expect(schema.projects).toBeDefined();
    expect(typeof schema.projects).toBe("object");
  });

  it("should export all schema tables", () => {
    const schemaKeys = Object.keys(schema);
    expect(schemaKeys).toContain("contacts");
    expect(schemaKeys).toContain("projects");
  });
});
