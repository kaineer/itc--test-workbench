// TASK: `Point.mirror(5, -5)` для (0, 0) должна переместить точку в (10, -10)
const { Point } = result;
const p = new Point(0, 0);

p.mirror(5, -5);

assertEqual(10, p.x);
assertEqual(-10, p.y);
