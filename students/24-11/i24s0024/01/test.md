### 6e485405-209a-4fcf-966b-2bc4fc106ca6
```js
const year = 2025;
const month = 5;

const dogs = 13;
const cats = 7;
const left = dogs - cats;

const seconds = 2 * 45 * 60;
const steps = (10 - 1) * 32;
```
### d1df2e3d-d239-490b-9e31-ef2405899bca
```js
const city = "Екатеринбург";
const year = "2025";

const place = "г. " + city;
const last4 = city.slice(-4);

const tens = year.slice(0, year.indexOf("5"));
const ter = city.slice(3, 6);
```
### e405f5c1-fde2-4926-963b-7f178863c10c
```js
const numbers = [1, 3, 9, 27, 81];
const numbersCopy = [...numbers];

const last3 = [numbers[4], numbers[3], numbers[2]];
const sumLast3 = last3[0] + last3[1] + last3[2];

const five = [last3[0], last3[1], last3[2], 100, 200];
```
### 2a0326ab-c18a-4995-8803-fdd96d8803b8
```js
const source = {
  green: "зеленый",
  red: "красный",
  yellow: "желтый"
};

const green = source.green;

const keys = Object.keys(source);
const values = Object.values(source);

const railroad = {
  ...source,
  blue: "синий"
};
```
