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

  expect(results.map(r => r.ok)).toEqual([ true, true ]);
  expect(results.map(r => r.title)).toEqual([
    "function should be defined",
    "function should return world"
  ]);
});

it("should run unittest with missing result", () => {
  const results = runUnittest(ut, lines(
    "function hello() {", "  return ''", "}"
  ));

  expect(results.map(r => r.ok)).toEqual([ true, false ]);
  expect(results.map(r => r.message)).toEqual([
    void 0,
    "hello() должна возвращать 'world'"
  ]);
});
