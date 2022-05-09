import IPrototype from "./IPrototype";

export default class Button implements IPrototype {
  constructor(
    private width: number,
    private height: number,
    private color: "red" | "green" | "blue"
  ) {}

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getColor() {
    return this.color;
  }

  clone(): Button {
    return new Button(this.width, this.height, this.color);
  }
}
