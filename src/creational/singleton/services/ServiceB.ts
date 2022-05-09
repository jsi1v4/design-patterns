import Service from "./Service";

export default class ServiceB {
  getInstance(): Service {
    return new Service("B");
  }
}
