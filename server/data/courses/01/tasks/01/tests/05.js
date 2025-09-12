// title: "`left` должно быть равно разнице между `dogs` и `cats`"

const { left, dogs, cats } = result;

assertIsNumber(dogs);
assertIsNumber(cats);
assertEqual(left, dogs - cats);
