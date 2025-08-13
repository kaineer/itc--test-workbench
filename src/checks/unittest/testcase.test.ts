import { it, expect } from "vitest"
import { testcase } from "./testcase"
import { directory } from "./directory"

import { join, dirname } from "path"

const __dirname = dirname(import.meta.url).slice('file:/'.length);
const fixturePath = join(__dirname, "./fixtures/testcase");
const dir = directory(fixturePath);

it("should return content", () => {
  const tc = testcase(dir, "01.js");
  expect(tc.content.includes("first, second")).toBeTruthy();
});

it("should return variable array", () => {
  const tc = testcase(dir, "01.js");
  expect(tc.results).toEqual(["first", "second"]);
});
