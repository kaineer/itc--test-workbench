// TASK: `isArrowFunction` должна возвращать `false` для не-функций

const { isArrowFunction } = result;

assert(!isArrowFunction());
assert(!isArrowFunction(1));
assert(!isArrowFunction(""));
assert(!isArrowFunction(true));
assert(!isArrowFunction({}));
