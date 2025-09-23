// TASK: `describe` должна вернуть `sum/0` для функции `sum` с неопределенным числом параметров

const { describe } = result;

assertEqual(describe(function sum(...args) {}), "sum/0");
