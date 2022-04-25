import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  getCargo(): void {
    console.log("Get delivery...");
  }

  startRoute(): void {
    console.log("Starting route to bike.");
  }
}
