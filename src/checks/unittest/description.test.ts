import { it, expect } from "vitest"
import { readAndTransform } from "./description"
import { directory } from "./directory"

import { join, dirname } from "path"

const __dirname = dirname(import.meta.url).slice('file:/'.length);
const fixturePath = join(__dirname, "./fixtures/description")
const dir = directory(fixturePath);

it("should read it successfully and return html", () => {
  const result = readAndTransform(dir);

  expect(result).toMatch("Sample test")
  expect(result).toMatch("<ul");
  expect(result).toMatch("<code");
});
