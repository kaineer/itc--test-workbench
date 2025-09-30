// TASK: вызов `Rectangle.mirror(10, 10)` отразит прямоугольник относительно его позиции

const { Rectangle } = result;

const r = new Rectangle(10, 10, 4, 6);
r.mirror(10, 10);

assertDeepEqual([
  [6, 4], [10, 4], [10, 10], [6, 10]
], r.points());
