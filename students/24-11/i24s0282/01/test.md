### 6e485405-209a-4fcf-966b-2bc4fc106ca6
```js
// Код нужно писать здесь
const year = 2025
const month = 5
const dogs = 13
const cats = 7
const left = dogs - cats
const seconds = 5400
const steps = 32 * 9
```
### d1df2e3d-d239-490b-9e31-ef2405899bca
```js
//
const city = "Екатеринбург"
const year = "2025"
const place = "г. " + city
const last4 = city.slice(-4, city.length)
const tens = year.slice(0, 3)
const ter = city.slice( city.indexOf('т'), city.indexOf('р') + 1 )
```
### e405f5c1-fde2-4926-963b-7f178863c10c
```js
//
let numbers = [
  oneNum = 1,
  twoNum = oneNum * 3,
  threeNum = twoNum * 3,
  fourNum = threeNum * 3,
  fiveNum = fourNum * 3,
]

let numbersCopy = numbers.slice()

let last3 = ( numbers.slice(-3) ).reverse()

const sumLast3 = sumArrey(last3.length, last3)

const five = last3.slice()
five.push(100, 200)

function sumArrey(quantity, arrey) {
    let sum = 0

    for (let i = 0; i < quantity; i++) { sum += arrey[i] }

    return sum
}
```
### 2a0326ab-c18a-4995-8803-fdd96d8803b8
```js
// Исходный объект, из него будем дергать свойства
const source = {
  green: "зеленый",
  red: "красный",
  yellow: "желтый"
}

const green = source.green
const keys = Object.keys(source)
const values = Object.values(source)
const railroad = structuredClone(source)
railroad['blue'] = 'синий'

```
