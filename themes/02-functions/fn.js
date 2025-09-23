const fn = (a, b) => a + b;
const cn = function (name) { return this.greeting + " " + name }

console.log(cn.call({ greeting: "Привет" }, "медвед"))
console.log(fn.apply(null, [4, 9]));
