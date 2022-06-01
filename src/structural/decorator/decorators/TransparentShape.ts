import Shape from "../shapes/Shape";

export default class TransparentShape extends Shape {
  constructor(private shape: Shape, private transparency: number) {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString() {
    return (
      `${this.shape.toString()} has ` +
      `${this.transparency * 100.0}% transparency`
    );
  }
}
