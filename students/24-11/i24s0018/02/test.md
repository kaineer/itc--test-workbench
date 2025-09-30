### 9a8faf15-7775-4e30-88f9-e23fb3e7555a
```js
// 1
    function fn(a,b) {
        return 'a+b'
    }
//2
    const afn = (a,b) => {
      return 'a+b';
    };
//3
    const fn1 = function(param) {
    return param;
    };

// будет ли работать так? const fn1 = (a) => a; ??
//4
    function add(a, b) { return a + b }
//5
      function count(params) {
        if (arguments.length === 0) {
          return 0;
        }
        if (arguments.length === 3) {
          return 3;
        }
      }


```
### 21b1fe2e-682b-4d95-aef3-12a61fb8d447
```js
//
  function sum(...numbers) {
    if (numbers.length === 0) return 0; {
      return numbers.reduce((total, num) => total + num, 0);
    }
  }

```
### 921525ab-b56a-4947-a395-8e38f48a73ca
```js
//
    function describe(fnc) {
      const name = fnc.name || 'noname'
      const count = fnc.length;
      return `${name}/${count}`;
    }
```
### dffeaf17-a6fe-4bdf-a01e-589a7fec3f51
```js
//
  const isArrowFunction = (fnc) => {
    if (typeof fnc !== 'function') {
        return false;
    }
    const functionString = fnc.toString().trim();
    return (
        functionString.includes('=>') &&
        !functionString.startsWith('function') &&
        !functionString.startsWith('class') &&
        fnc.prototype === undefined
    );
};
```
