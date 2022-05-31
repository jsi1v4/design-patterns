export default class GraphicObject {
  private _name: string;
  public color = "";
  public children: GraphicObject[] = [];

  get name() {
    return this._name;
  }

  constructor(name) {
    this._name = name;
  }

  print(buffer, depth) {
    buffer.push("*".repeat(depth));
    if (depth > 0) buffer.push(" ");
    if (this.color) buffer.push(this.color + " ");
    buffer.push(this.name);
    buffer.push("\n");

    for (let child of this.children) {
      child.print(buffer, depth + 1);
    }
  }

  toString() {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join("");
  }
}
