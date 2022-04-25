import Airplane from "../vehicles/aerial/Airplane";
import IAerialVehicle from "../vehicles/aerial/interfaces/IAerialVehicle";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
  createLandTransport(): ILandVehicle {
    return new Car();
  }

  createAerialTransport(): IAerialVehicle {
    return new Airplane();
  }
}
