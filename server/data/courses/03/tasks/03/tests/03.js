// TASK: Если контейнер расположен в точке (2, 3), добавление прямоугольника из точки (0, 0), должно переместить этот прямоугольник в (2, 3)

const { Container, Rectangle } = result;
const c = new Container(2, 3);

const r = new Rectangle(0, 0, 1, 1);
c.add(r);

const { x: rx, y: ry } = r.position;

assertEqual(2, rx);
assertEqual(3, ry);
