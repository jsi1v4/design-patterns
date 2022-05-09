import Service from "./Service";

export default class ServiceA {
  getInstance(): Service {
    return new Service("A");
  }
}
