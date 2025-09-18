### 6e485405-209a-4fcf-966b-2bc4fc106ca6
```js
const year = 2025;
const month = 5;
const dogs = 13;
const cats = 7;

const left = dogs - cats;
const seconds = 2 * 45 * 60;

const steps = 9 * 32;
console.log('year:', year);
console.log('month:', month);
console.log('dogs:', dogs);
console.log('cats:', cats);
console.log('left:', left);
console.log('seconds:', seconds);
console.log('steps:', steps);
```
### d1df2e3d-d239-490b-9e31-ef2405899bca
```js
const city = "Екатеринбург";
const year = "2025";

const place = "г. " + city;
const last4 = city.slice(-4);
const tens = year.substring(0, year.indexOf('5'));

const ter = city.substring(3, 6);
console.log('city:', city);
console.log('year:', year);
console.log('place:', place);
console.log('last4:', last4);
console.log('tens:', tens);
console.log('ter:', ter);
```
### e405f5c1-fde2-4926-963b-7f178863c10c
```js
const numbers = [1];
for (let i = 1; i < 5; i++) {
    numbers.push(numbers[i - 1] * 3);
}
const numbersCopy = [...numbers];

const last3 = numbers.slice(-3).reverse();
const sumLast3 = last3.reduce((sum, num) => sum + num, 0);
const five = [...last3, 100, 200];

console.log('numbers:', numbers);
console.log('numbersCopy:', numbersCopy);
console.log('last3:', last3);
console.log('sumLast3:', sumLast3);
console.log('five:', five);
```
### 2a0326ab-c18a-4995-8803-fdd96d8803b8
```js
// Исходный объект, из него будем дергать свойства
const source = {
  green: "зеленый",
  red: "красный",
  yellow: "желтый"
    }

const green = source.green;
const keys = Object.keys(source);
const values = Object.values(source);

const railroad = {
    ...source,
    blue: "синий"
};

console.log('green:', green);
console.log('keys:', keys);
console.log('values:', values);
console.log('railroad:', railroad);
```
