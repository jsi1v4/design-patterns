import Drone from "../vehicles/aerial/Drone";
import IAerialVehicle from "../vehicles/aerial/interfaces/IAerialVehicle";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import Motorcycle from "../vehicles/land/Motorcycle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class IfoodTransport implements ITransportFactory {
  createLandTransport(): ILandVehicle {
    return new Motorcycle();
  }

  createAerialTransport(): IAerialVehicle {
    return new Drone();
  }
}
