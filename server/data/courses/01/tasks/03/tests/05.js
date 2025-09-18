// title: "В `last3` должны находиться три последних числа от большего к меньшему"

const { last3, numbers } = result;

assertIsArray(last3);
assertIsArray(numbers);

assertEqual(3, last3.length);

const rev = numbers.slice(-3).reverse();
assertDeepEqual(last3, rev);
