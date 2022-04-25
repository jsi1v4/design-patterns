import IVehicle from "./interfaces/IVehicle";

export default class Car implements IVehicle {
  getCargo(): void {
    console.log("Get passengers...");
  }

  startRoute(): void {
    console.log("Starting route.");
  }
}
