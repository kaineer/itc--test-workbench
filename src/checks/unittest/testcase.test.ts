import { it, expect } from "vitest"
import { testcase } from "./testcase"
import { directory } from "./directory"

import { getFixturePath } from "../../utils/fixtures"

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

it("should return content", () => {
  const { content } = testcase(dir, "01.js");
  expect(content.includes("first, second")).toBeTruthy();
});

it("should return variable array", () => {
  const { results } = testcase(dir, "01.js");
  expect(results).toEqual(["first", "second"]);
});

it("should return testcase title", () => {
  const { title }  = testcase(dir, "01.js");
  expect(title).toBe("Sample title");
});
