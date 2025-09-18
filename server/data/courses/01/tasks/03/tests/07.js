// title: "Подготовьте константу `five`: первые три элемента из `last3` и два числа `100` и `200`"

const { five, last3 } = result;

assertIsArray(five);
assertIsArray(last3);

assertDeepEqual(five, [...last3, 100, 200]);
