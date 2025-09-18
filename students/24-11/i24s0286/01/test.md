### d1df2e3d-d239-490b-9e31-ef2405899bca
```js
const city = "Екатеринбург";
const year = "2025";
const place = "г. " + city;
const last4 = city.slice(-4);
const tens = year.slice(0, year.indexOf('5'));
const ter = city.slice(city.indexOf('т'), city.indexOf('р') + 1);

console.log(city);   // "Екатеринбург"
console.log(year);   // "2025"
console.log(place);  // "г. Екатеринбург"
console.log(last4);  // "бург"
console.log(tens);   // "20"
console.log(ter);    // "терин"
```
### e405f5c1-fde2-4926-963b-7f178863c10c
```js
// Объявим массив
const numbers = [1, 3, 9, 27, 81];

// Посоздаем копии и поизменяем их
const numbersCopy = [...numbers];
const last3 = [numbers[4], numbers[3], numbers[2]]; // [81, 27, 9] — три последних от большего к меньшему
const five = [...last3, 100, 200];
const sumLast3 = last3.reduce((acc, curr) => acc + curr, 0); // Сумма [81, 27, 9] = 117

console.log(numbers);     // [1, 3, 9, 27, 81]
console.log(numbersCopy); // [1, 3, 9, 27, 81]
console.log(last3);       // [81, 27, 9]
console.log(five);        // [81, 27, 9, 100, 200]
console.log(sumLast3);    // 117
```
### 2a0326ab-c18a-4995-8803-fdd96d8803b8
```js
// Исходный объект, из него будем дергать свойства
const source = {
  green: "зеленый",
  red: "красный",
  yellow: "желтый"
};

// В константу green записываем значение из ключа green
const green = source.green;

// В константу keys записываем список ключей объекта source
const keys = Object.keys(source);

// В константу values записываем список значений объекта source
const values = Object.values(source);

// В константу railroad записываем копию source с добавленной парой { blue: 'синий' }
const railroad = { ...source, blue: "синий" };

console.log(green);    // "зеленый"
console.log(keys);     // ["green", "red", "yellow"]
console.log(values);   // ["зеленый", "красный", "желтый"]
console.log(railroad); // { green: "зеленый", red: "красный", yellow: "желтый", blue: "синий" }

```
