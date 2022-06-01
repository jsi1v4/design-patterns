import Shape from "./Shape";

export default class Square extends Shape {
  constructor(private side = 0) {
    super();
    this.side = side;
  }

  toString() {
    return `A square with side ${this.side}`;
  }
}
