### 9a8faf15-7775-4e30-88f9-e23fb3e7555a
```js
//
function fn() {};
const afn = () => {};
const fn1 = parametere => parametere;
const add = (a, b) => a + b;
function count() {if (arguments.length === 0) {return 0;}
  else {return arguments.length;}};
```
### 21b1fe2e-682b-4d95-aef3-12a61fb8d447
```js
//
function sum() {
let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
  if (arguments.length === 0) {
    return 0;
  }}
```
### 921525ab-b56a-4947-a395-8e38f48a73ca
```js
//
function describe(func) {
  const name = func.name || 'noname';
  const nums = func.length;
  return `${name}/${nums}`;
}

function add(a, b) {
  return a + b;
}

function sum() {
  let total = 0;
  return total;
}

function none() {}

const anonymfunction = function(a, b, c, d, e) {
  return a + b + c + d + e;
};
```
### dffeaf17-a6fe-4bdf-a01e-589a7fec3f51
```js
//
function isArrowFunction(func) {
    if (func === isArrowFunction) {
        return true;
    }

    if (typeof func !== 'function') {
        return false;
    }

    try {
        new func();
        return false;
    } catch {
        return !func.hasOwnProperty('prototype');
    }
}
```
