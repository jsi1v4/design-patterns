import GraphicObject from "./shapes/GraphicObject";
import Circle from "./shapes/Circle";
import Square from "./shapes/Square";

function main() {
  let drawing = new GraphicObject("Group 1");
  drawing.children.push(new Square("Red"));
  drawing.children.push(new Circle("Yellow"));

  let group = new GraphicObject("Group 2");
  group.children.push(new Circle("Blue"));
  group.children.push(new Square("Blue"));
  drawing.children.push(group);

  console.log(drawing.toString());
}

main();
