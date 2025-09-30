// TASK: вызов `Rectangle.mirror(0, 0)` отразит прямоугольник относительно начала координат

const { Rectangle } = result;

const r = new Rectangle(10, 10, 4, 6);
r.mirror(0, 0);

assertDeepEqual([
  [-14, -16], [-10, -16], [-10, -10], [-14, -10]
], r.points());
