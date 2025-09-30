class Point {
  constructor(x, y) { this.move(x, y); }
  move(x, y) { this.x = x; this.y = y; }
  moveBy(x, y) { this.x += x; this.y += y; }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.position = new Point(x, y);
    this.size = new Point(w, h);
  }
  move(x, y) { this.position.move(x, y); }
  moveBy(x, y) { this.position.moveBy(x, y); }
}

class Container {
  constructor(x = 0, y = 0) {
    this.position = new Point(x, y);
  }

  // add(figure) {}
  // move(x, y) {}
  // moveBy(x, y) {}
}
