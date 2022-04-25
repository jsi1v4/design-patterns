import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";

export default class MotorcycleTransport extends Transport {
  createTransport() {
    return new Motorcycle();
  }
}
