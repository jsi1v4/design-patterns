import Transport from "./Transport";
import Car from "./vehicles/Car";

export default class CarTransport extends Transport {
  createTransport() {
    return new Car();
  }
}
