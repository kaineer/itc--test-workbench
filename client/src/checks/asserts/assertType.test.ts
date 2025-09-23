import { describe, expect, it } from 'vitest'
import {
  assertType,
  // assertIsBoolean,
  // assertIsString,
  // assertIsNumber,
  // assertIsBigint,
  // assertIsNull,
} from './assert'

describe("assertType()", () => {
  it("should not throw exception for correct type", () => {
    expect(() => assertType("number")(32)).not.toThrowError();
    expect(() => assertType("string")("")).not.toThrowError();
    expect(() => assertType("bigint")(1n)).not.toThrowError();
    expect(() => assertType("boolean")(true)).not.toThrowError();
    expect(() => assertType("object")(null)).not.toThrowError();
  });

  it("should throw exception when type is wrong", () => {
    expect(() => assertType("number")(1n)).toThrowError();
  });
});
