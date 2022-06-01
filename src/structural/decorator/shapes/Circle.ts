import Shape from "./Shape";

export default class Circle extends Shape {
  constructor(private radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor: number) {
    this.radius *= factor;
  }

  toString() {
    return `A circle of radius ${this.radius}`;
  }
}
