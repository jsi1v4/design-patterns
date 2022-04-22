import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  getCargo(): void {
    console.log("Get delivery...");
  }

  startRoute(): void {
    console.log("Starting route.");
  }
}
