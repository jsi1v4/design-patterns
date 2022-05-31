import GraphicObject from "./GraphicObject";

export default class Square extends GraphicObject {
  constructor(color: string) {
    super("Square");
    this.color = color;
  }
}
