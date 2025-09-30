// TASK: `Container.move()` должен перемещать фигуры внутри. Если после добавления в контейнер фигура находилась в точке (0, 0) и контейнер переместился из (2, 2) в (3, 3), фигура должна переместиться в (1, 1)

const { Container, Rectangle } = result;
const c = new Container(2, 2);

const r = new Rectangle(0, 0, 1, 1);

c.add(r);
r.move(0, 0);
c.move(3, 3);

assertEqual(1, r.position.x);
assertEqual(1, r.position.y);
