// TASK: Если добавленный в контейнер прямоугольник находился в точке (1, 1), после вызова метода контейнера moveBy(3, 4), прямоугольник должен переместиться в точку (4, 5)

const { Container, Rectangle } = result;
const c = new Container(2, 2);

const r = new Rectangle(0, 0, 1, 1);

c.add(r);
r.move(1, 1);

c.moveBy(3, 4);

assertEqual(4, r.position.x);
assertEqual(5, r.position.y);
