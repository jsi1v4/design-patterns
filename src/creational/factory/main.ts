import BikeTransport from "./transport/BikeTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

function main() {
  let transport: Transport;

  if (process.argv.includes("--uber")) {
    transport = new CarTransport();
  } else if (process.argv.includes("--delivery")) {
    transport = new MotorcycleTransport();
  } else if (process.argv.includes("--delivery-bike")) {
    transport = new BikeTransport();
  } else {
    console.log("Select a type of transport!");
    return;
  }

  transport.startTransport();
}

main();
