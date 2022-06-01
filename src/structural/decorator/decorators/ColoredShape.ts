import Shape from "../shapes/Shape";

export default class ColoredShape extends Shape {
  constructor(private shape: Shape, private color: string) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} ` + `has the color ${this.color}`;
  }
}
