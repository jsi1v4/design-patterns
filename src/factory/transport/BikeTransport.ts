import Transport from "./Transport";
import Bike from "./vehicles/Bike";

export default class BikeTransport extends Transport {
  createTransport() {
    return new Bike();
  }
}
