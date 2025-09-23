export const assert = (value: unknown, message?: string = "") => {
  const condition = Boolean(value);

  if (!condition) {
    console.log(message);
    throw new Error(message);
  }
}

export const defaultEqualityMessage = "First argument should equal second";

export const assertEqual = <T,>(
  left: T,
  right: T,
  message?: string = defaultEqualityMessage
) => {
  assert(left === right, message);
}

export const defaultDeepEqualityMessage = "First argument should deep equal second";

const checkDeepEqual = (left: unknown, right: unknown): boolean => {
  if (typeof left !== typeof right) {
    return false;
  }

  if (typeof left !== "object") {
    return left === right;
  }

  if (left === null) return right === null;

  if (left.__proto__?.__proto__ !== null && !Array.isArray(left)) {
    return left === right;
  }

  return Object.keys(left).every((key) => {
    return checkDeepEqual(left[key], right[key]);
  });
}

export const assertDeepEqual = (
  left: unknown,
  right: unknown,
  message?: string = defaultDeepEqualityMessage
) => {
  assert(
    checkDeepEqual(left, right),
    message
  );
}

export const assertType = (type: string) => (
  value: unknown,
  message?: string = ""
) => {
  assert(
    typeof value === type,
    message
  );
}

export const assertIsBoolean = assertType("boolean");
export const assertIsString = assertType("string");
export const assertIsNumber = assertType("number");
export const assertIsBigint = assertType("bigint");
export const assertIsFunction = assertType("function");
export const assertIsUndefined = assertType("undefined");

export const assertIsArrowFunction = (value: unknown, message?: string = "") => {
  assert(
    typeof(value) === 'function' && typeof(value.prototype) === 'undefined',
    message
  );
}

export const assertIsObject = (value: unknown, message?: string = "") => {
  assert(value && typeof value === "object", message);
}

export const assertIsNull = (value: unknown, message?: string = "") => {
  assertEqual(value, null, message);
}

export const assertIsTruthy = (value: unknown, message?: string = "") => {
  assert(!!value, message);
}

export const assertIsFalsey = (value: unknown, message?: string = "") => {
  assert(!value, message);
}

export const assertIsArray = (value: unknown, message?: string = "") => {
  assert(Array.isArray(value), message);
}

export const asserts = {
  assert,
  assertEqual,
  assertDeepEqual,
  assertIsString,
  assertIsNumber,
  assertIsBoolean,
  assertIsUndefined,
  assertIsBigint,
  assertIsFunction,
  assertIsArrowFunction,
  assertIsNull,
  assertIsObject,
  assertIsTruthy,
  assertIsFalsey,
  assertIsArray,
}
