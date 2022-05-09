import ServiceA from "./services/ServiceA";
import ServiceB from "./services/ServiceB";
import ServiceSingleton from "./services/ServiceSingleton";

function main() {
  const serviceSingleton = new ServiceSingleton();
  const serviceA = new ServiceA();
  const serviceB = new ServiceB();

  const singleton = serviceSingleton.getInstance();
  const a1 = serviceA.getInstance();
  const b1 = serviceB.getInstance();

  const singleton2 = serviceSingleton.getInstance();
  const a2 = serviceA.getInstance();
  const b2 = serviceB.getInstance();

  singleton.print();
  a1.print();
  b1.print();
  singleton2.print();
  a2.print();
  b2.print();
}

main();
