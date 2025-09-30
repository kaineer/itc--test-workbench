### 6e485405-209a-4fcf-966b-2bc4fc106ca6
```js

const year = 2025;
const month = year - 2020;
const dogs = 13;
const cats = 7;
const left = dogs - cats;

const seconds = 2 * 45 * 60;
const steps = 32 * 9;

console.log({ year, month, dogs, cats, left, seconds, steps });
```
### d1df2e3d-d239-490b-9e31-ef2405899bca
```js
const city = "Екатеринбург";
const year = "2025";

const place = "г. " + city;
const last4 = city.slice(-4);
const tens = year.slice(0, year.indexOf('55')); // "" (так как '55' нет в строке)
const ter = city.slice(city.indexOf('т'), city.indexOf('р') + 1); // "теринбург" (от 'т' до 'р' включительно)

console.log({ city, year, place, last4, tens, ter });
```
### e405f5c1-fde2-4926-963b-7f178863c10c
```js

const numbers = [1];
for (let i = 1; i < 5; i++) {
    numbers.push(numbers[i - 1] * 3);
}

const numbersCopy = [...numbers];

const last3 = numbers.slice(-3).sort((a, b) => b - a);

const sumLast3 = last3.reduce((acc, val) => acc + val, 0);

const five = [...last3.slice(0, 3), 100, 200];


console.log({ numbers, numbersCopy, last3, sumLast3, five });
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

console.log({ source, green, keys, values, railroad });
```
