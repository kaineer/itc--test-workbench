// TASK: `describe` должна вернуть `none/0` для функции `none` без параметров

const { describe } = result;

assertEqual(describe(function none() {}), "none/0");
