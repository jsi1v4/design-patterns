import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  getCargo(): void {
    console.log("Car: Pegamos os passageiros, estamos prontos!");
  }

  startRoute(): void {
    this.getCargo();
    console.log("Car: Iniciando o trajeto...");
  }
}
