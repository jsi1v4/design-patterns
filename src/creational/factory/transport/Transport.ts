import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport();
    vehicle.getCargo();
    vehicle.startRoute();
  }

  protected abstract createTransport(): IVehicle;
}
