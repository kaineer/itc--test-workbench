// TASK: `Rectangle.moveBy(10, 10)` должна переместить прямоугольник в точку `(20, 20)`

const { Rectangle } = result;

const r = new Rectangle(10, 10, 4, 6);
r.moveBy(10, 10);

assertDeepEqual([
  [20, 20], [24, 20], [24, 26], [20, 26]
], r.points());
