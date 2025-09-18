// title: Каждый следующий элемент `numbers` должен быть в три раза больше предыдущего

const { numbers } = result;

assertIsArray(numbers);
for (let i = 1; i < numbers.length; i++) {
  assertEqual(numbers[i - 1] * 3, numbers[i]);
}
