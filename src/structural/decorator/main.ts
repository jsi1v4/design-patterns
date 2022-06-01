import Circle from "./shapes/Circle";
import ColoredShape from "./decorators/ColoredShape";
import TransparentShape from "./decorators/TransparentShape";

function main() {
  let circle = new Circle(2);
  console.log(circle.toString());

  let redCircle = new ColoredShape(circle, "red");
  console.log(redCircle.toString());

  let redHalfCircle = new TransparentShape(redCircle, 0.5);
  console.log(redHalfCircle.toString());
}

main();
