// title: "Массив `numbersCopy` должен быть копией массива `numbers` (не ссылкой)"

const { numbers, numbersCopy } = result;

assertDeepEqual(numbers, numbersCopy);

numbersCopy[0] = 10;

assertEqual(10, numbersCopy[0]);
assertEqual(1, numbers[0]);
