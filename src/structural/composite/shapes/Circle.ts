import GraphicObject from "./GraphicObject";

export default class Circle extends GraphicObject {
  constructor(color: string) {
    super("Circle");
    this.color = color;
  }
}
