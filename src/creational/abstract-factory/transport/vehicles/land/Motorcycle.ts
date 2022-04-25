import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  getCargo(): void {
    console.log("Motorcycle: Já pegamos a encomendo!");
  }

  startRoute(): void {
    this.getCargo();
    console.log("Motorcycle: Iniciando a entrega...");
  }
}
