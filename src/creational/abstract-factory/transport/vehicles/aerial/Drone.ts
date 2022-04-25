import IAerialVehicle from "./interfaces/IAerialVehicle";

export default class Drone implements IAerialVehicle {
  checkWind(): void {
    console.log("Drone: Sem ventos, ventos ok!");
  }

  getCargo(): void {
    console.log("Drone: Carga aclopada.");
  }

  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Drone: Iniciando a decolagem e trajeto...");
  }
}
