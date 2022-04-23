import ITransportFactory from "./factories/interfaces/ITransportFactory";
import IAerialVehicle from "./vehicles/aerial/interfaces/IAerialVehicle";
import ILandVehicle from "./vehicles/land/interfaces/ILandVehicle";

export default class Transport {
  private landVehicle: ILandVehicle;
  private aerialVehicle: IAerialVehicle;

  constructor(factory: ITransportFactory) {
    this.landVehicle = factory.createLandTransport();
    this.aerialVehicle = factory.createAerialTransport();
  }

  startRoute() {
    this.landVehicle.startRoute();
    this.aerialVehicle.startRoute();
  }
}
