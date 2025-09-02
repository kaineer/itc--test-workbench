const a = 5;
let b = 7;

try {
  a = 6;
  console.log("Okay, you can do it");
} catch (err) {
  console.log("Cannot change constant a");
}

try {
  b = 8;
  console.log("Yeah, you can change b");
} catch (err) {
  console.log("What happens?");
}
