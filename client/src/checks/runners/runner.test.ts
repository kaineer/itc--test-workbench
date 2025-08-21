import { describe, expect, it } from 'vitest'
import { runner } from "./runner"

it("should use assert and throw an exception", () => {
  const code = "assert(false)";
  expect(runner(code).failed).toBeTruthy();
});

it("should use assert and not throw an exception", () => {
  const code = "assert(true)";
  expect(runner(code).failed).toBeFalsy();
});

it("should use assertIsNumber", () => {
  expect(runner("assertIsNumber(42)").failed).toBeFalsy();
  expect(runner("assertIsNumber('string')").failed).toBeTruthy();
});

it("should use assertIsArray", () => {
  expect(runner("assertIsArray([])").failed).toBeFalsy();
  expect(runner("assertIsArray(null)").failed).toBeTruthy();
});

it("should use assertIsFunction", () => {
  expect(
    runner("assertIsFunction(() => null)").failed
  ).toBeFalsy();

  expect(
    runner("assertIsFunction(32)").failed
  ).toBeTruthy();
});
