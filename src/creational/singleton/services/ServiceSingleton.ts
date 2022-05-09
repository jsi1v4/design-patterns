import Service from "./Service";

export default class ServiceSingleton {
  private instance: Service | null = null;

  getInstance(): Service {
    if (this.instance === null) {
      this.instance = new Service("Singleton");
    }
    return this.instance;
  }
}
