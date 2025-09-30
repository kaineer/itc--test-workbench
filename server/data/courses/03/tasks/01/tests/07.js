// TASK: `Point.mirror(4, 1)` для (2, 2) должна переместить точку в (6, 0)
const { Point } = result;
const p = new Point(2, 2);

p.mirror(4, 1);

assertEqual(6, p.x);
assertEqual(0, p.y);
