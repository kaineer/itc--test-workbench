// TASK: `Point.moveBy(x, y)` должна менять первую координату на `x`
const { Point } = result;
const p = new Point(10, 0);
p.moveBy(10, 0);

assertEqual(20, p.x);
