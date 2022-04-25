import IfoodTransport from "./transport/factories/IfoodTransport";
import ITransportFactory from "./transport/factories/interfaces/ITransportFactory";
import NineNineTransport from "./transport/factories/NineNineTransport";
import UberTransport from "./transport/factories/UberTransport";
import Transport from "./transport/Transport";

function main() {
  let factory: ITransportFactory;

  if (process.argv.includes("--uber")) {
    factory = new UberTransport();
  } else if (process.argv.includes("--ifood")) {
    factory = new IfoodTransport();
  } else if (process.argv.includes("--99")) {
    factory = new NineNineTransport();
  } else {
    console.log("Select a type of transport!");
    return;
  }

  const tranport = new Transport(factory);

  tranport.startRoute();
}

main();
