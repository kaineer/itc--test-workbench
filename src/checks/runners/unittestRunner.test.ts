import { it, expect } from "vitest"
import { unittest } from "../unittest/unittest"
import { directory } from "../unittest/directory"
import { getFixturePath, lines } from "../../utils/fixtures"
import { runUnittest } from "./unittestRunner";

const fixturePath = getFixturePath(import.meta.url);
const dir = directory(fixturePath);
const ut = unittest(dir);

it("should run unittest without usercode", () => {
  expect(() => runUnittest(ut, "")).not.toThrowError();
});

it("should run unittest with defined hello function", () => {
  const results = runUnittest(ut, lines(
    "function hello() {", "  return 'world'", "}"
  ));

  expect(results).toEqual([
    { ok: true, failed: false, title: "function should be defined" },
    { ok: true, failed: false, title: "function should return world" }
  ]);
});

it("should run unittest with missing result", () => {
  const results = runUnittest(ut, lines(
    "function hello() {", "  return ''", "}"
  ));

  expect(results[0].ok).toBeTruthy();
  expect(results[1].ok).toBeFalsy();
});
