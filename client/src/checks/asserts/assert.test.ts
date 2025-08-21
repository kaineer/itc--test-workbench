import { describe, expect, it } from 'vitest'
import {
  assert,
  assertIsTruthy,
  assertIsFalsey,
} from './assert'

it('should not throw exception when condition is truthy', () => {
  expect(() => assert(true, "message")).not.toThrowError();
});

it('should throw exception when condition is falsey', () => {
  expect(() => assert(false, "message")).toThrowError("message");
});

const truthyValues = [
  42, "string", true,
  new Date(), /regexp/, [],
];

const falseyValues = [
  false,
  null,
  void 0, // undefined
  "",     // empty string
];

describe("assertIsTruthy()", () => {
  it('should not throw exception for truthy values', () => {
    truthyValues.forEach((value) => {
      expect(() => assertIsTruthy(value)).not.toThrowError();
    });
  });

  it('should throw exception for falsey values', () => {
    falseyValues.forEach((value) => {
      expect(() => assertIsTruthy(value)).toThrowError();
    });
  });
});

describe("assertIsFalsey()", () => {
  it('should throw exception for truthy values', () => {
    truthyValues.forEach((value) => {
      expect(() => assertIsFalsey(value)).toThrowError();
    });
  });

  it('should not throw exception for falsey values', () => {
    falseyValues.forEach((value) => {
      expect(() => assertIsFalsey(value)).not.toThrowError();
    });
  });
});
