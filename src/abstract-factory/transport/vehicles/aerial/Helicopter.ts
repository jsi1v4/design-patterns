import IAerialVehicle from "./interfaces/IAerialVehicle";

export default class Helicopter implements IAerialVehicle {
  checkWind(): void {
    console.log("Helicopter: Sem ventos, ventos ok!");
  }

  getCargo(): void {
    console.log("Helicopter: Pegamos os passageiros, estamos prontos!");
  }

  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Helicopter: Iniciando a decolagem e trajeto...");
  }
}
