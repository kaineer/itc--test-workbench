import { expect, it } from 'vitest'
import { assertEqual, defaultEqualityMessage } from './assert'

it('should not throw exception when first argument is equal to second', () => {
  expect(() => assertEqual(1, 1)).not.toThrowError();
});

it('should throw an exception when arguments are different', () => {
  expect(() => assertEqual(1, 2)).toThrowError(defaultEqualityMessage);
});

it('should use specified message', () => {
  const message = "foo bar baz"

  expect(
    () => assertEqual(1, 2, message)
  ).toThrowError(message);
});

it('should not look inside objects', () => {
  expect(() => assertEqual({}, {})).toThrowError();
});
