export default class Service {
  private num: number = Math.floor(Math.random() * 1000);

  constructor(private name: string) {}

  print() {
    console.log(`${this.name}: ${this.num}`);
  }
}
