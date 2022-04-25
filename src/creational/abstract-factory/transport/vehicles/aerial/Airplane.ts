import IAerialVehicle from "./interfaces/IAerialVehicle";

export default class Airplane implements IAerialVehicle {
  checkWind(): void {
    console.log("Airplane: Sem ventos, ventos ok!");
  }

  getCargo(): void {
    console.log("Airplane: Carga aclopada.");
  }

  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Airplane: Iniciando a decolagem e trajeto...");
  }
}
