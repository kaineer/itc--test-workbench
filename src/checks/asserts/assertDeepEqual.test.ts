import { expect, it } from 'vitest'
import { assertDeepEqual, defaultDeepEqualityMessage } from './assert'

it('should not throw exception when first argument is equal to second', () => {
  expect(() => assertDeepEqual(1, 1)).not.toThrowError();
});

it('should throw an exception when arguments are different', () => {
  expect(() => assertDeepEqual(1, 2)).toThrowError(defaultDeepEqualityMessage);
});

it('should use specified message', () => {
  const message = "foo bar baz"

  expect(
    () => assertDeepEqual(1, 2, message)
  ).toThrowError(message);
});

it('should look inside objects', () => {
  expect(() => assertDeepEqual({}, {})).not.toThrowError();
});
