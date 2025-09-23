// TASK: `fn1` должна быть функцией и возвращать значение параметра, который ей передали

const { fn1 } = result;

assertEqual(fn1(5), 5);

const array = [];
assertEqual(fn1(array), array);

assertEqual(fn1("line"), "line");
