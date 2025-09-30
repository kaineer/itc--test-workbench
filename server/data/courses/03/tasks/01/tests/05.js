// TASK: `Point.mirror(x, y)` должна отразить `(10, -5)` относительно `(0, 0)` в `(-10, 5)`
const { Point } = result;
const p = new Point(10, -5);

p.mirror(0, 0);

assertEqual(-10, p.x);
assertEqual(5, p.y);
