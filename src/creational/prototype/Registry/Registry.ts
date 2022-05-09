import Button from "../Button/Button";

export default class Registry {
  private list: Button[] = [];

  start() {
    const btnA = new Button(16, 32, "red");
    const btnB = new Button(24, 32, "blue");
    this.list.push(btnA);
    this.list.push(btnA.clone());
    this.list.push(btnB);
    this.list.push(btnB.clone());
  }

  print() {
    this.list.forEach((el) => {
      console.log(`${el.getWidth()}, ${el.getHeight()}, ${el.getColor()}`);
    });
  }
}
