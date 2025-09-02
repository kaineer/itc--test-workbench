## template.js
import { unittestSlice } from "../../store/slices/unittest";
```js
function hello() {
%usercode
}
```

## in editor
```js
function hello() {
  return "world"
}
```

## in tests/01.js
```js
const { hello } = result;

assertIsFunction(hello, "hello должна быть функцией");
assertEqual(hello(), "world");
```

## building code, step 1
```js
const result = (() => {   //
  function hello() {
    return "world"
  }
                          //
  const __result = {};      //
  __result.hello = (typeof hello === "undefined" ? void 0 : hello); //
  return __result;          //
})();                     //
```

## building code, step 2
```js
const result = (() => {
  // ...
  return __result;
})();

const { hello } = result;

assertIsFunction(hello, "hello должна быть функцией");
assertEqual(hello(), "world");
```
