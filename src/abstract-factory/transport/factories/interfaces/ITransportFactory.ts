import IAerialVehicle from "../../vehicles/aerial/interfaces/IAerialVehicle";
import ILandVehicle from "../../vehicles/land/interfaces/ILandVehicle";

export default interface ITransportFactory {
  createLandTransport(): ILandVehicle;
  createAerialTransport(): IAerialVehicle;
}
