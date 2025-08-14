//
import { it, expect } from "vitest"
import { unittest } from "./unittest"
import { directory } from "./directory"

import { getFixturePath } from "../../utils/fixtures"

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);

const ut = unittest(dir);

it("should return non-null value", () => {
  expect(ut).not.toBeNull();
});

it("should return a description", () => {
  expect(ut.description.title).toBe("Sample unittest");
});

it("should return cases", () => {
  expect(ut.cases?.length).toBe(2);

  if (Array.isArray(ut.cases)) {
    expect(ut.cases[0].title).toBe("First task");
    expect(ut.cases[1].title).toBe("Second task");
  }
});

it("should return all result dependencies", () => {
  expect(ut.resultVars?.length).toBe(2);
  expect(ut.resultVars?.includes("first")).toBeTruthy();
  expect(ut.resultVars?.includes("second")).toBeTruthy();
});
