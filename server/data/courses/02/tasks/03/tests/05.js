// TASK: `describe` должна вернуть `noname/5` для анонимной функции с пятью параметрами

const { describe } = result;

assertEqual(describe(function (a, b, c, d, e) {}), "noname/5");
