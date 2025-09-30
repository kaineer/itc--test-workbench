// TASK: `Container.add(rectangle)` отрабатывает и не генерирует исключения

const { Container, Rectangle } = result;
const c = new Container();
const r = new Rectangle(0, 0, 1, 1);

assertDoesNotThrow(() => c.add(r));
