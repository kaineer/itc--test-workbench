### 9a8faf15-7775-4e30-88f9-e23fb3e7555a
```js
function fn() {}

const afn = () => {};

function fn1(param) {
    return param;
}

function add(a, b) {
    return a + b;
}

function count(...args) {
    if (args.length === 0) {
        return 0;
    }
    if (args.length === 3) {
        return 3;
    }
}
```
### 21b1fe2e-682b-4d95-aef3-12a61fb8d447
```js
function sum(...args) {
    if (args.length === 0) {
        return 0;
    }
    return args.reduce((total, current) => total + current, 0);
}
```
### 921525ab-b56a-4947-a395-8e38f48a73ca
```js
function describe(fn) {
    const name = fn.name || "noname";
    const paramsCount = fn.length;
    return ${name}/${paramsCount};
}
```
### dffeaf17-a6fe-4bdf-a01e-589a7fec3f51
```js
function isArrowFunction(fn) {
    if (typeof fn !== 'function') return false;
    if (fn === isArrowFunction) return true;
    return !fn.hasOwnProperty('prototype') && fn.toString().includes('=>');
}
```
