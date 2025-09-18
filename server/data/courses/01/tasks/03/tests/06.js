// title: "Константа `sumLast3` должна содержать сумму последних трех элементов"

const { last3, sumLast3 } = result;

assertIsNumber(sumLast3);
assertEqual(sumLast3, last3.reduce((a, b) => a + b, 0));
