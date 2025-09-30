class Point {
  constructor(x, y) {
    this.move(x, y);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(point) {
    return (
      point.x === this.x &&
      point.y === this.y
    );
  }

  // Добавлять можно сюда
}
// Сюда добавлять не надо
