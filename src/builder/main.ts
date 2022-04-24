import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

function main() {
  const builder = new VehicleBuilder();
  const director = new Director(builder);

  director.constructSedanCar();

  const sedan: Vehicle = builder.getVehicle();
  console.log(
    `${sedan.vehicleType}: Engine: ${sedan.engine.power}, Seats: ${sedan.seats}, Wheels: ${sedan.wheelsTotal}`
  );

  director.constructTruck();

  const truck: Vehicle = builder.getVehicle();
  console.log(
    `${truck.vehicleType}: Engine: ${truck.engine.power}, Seats: ${truck.seats}, Wheels: ${truck.wheelsTotal}`
  );

  director.constructMotorcycle();

  const motorcycle: Vehicle = builder.getVehicle();
  console.log(
    `${motorcycle.vehicleType}: Engine: ${motorcycle.engine.power}, Seats: ${motorcycle.seats}, Wheels: ${motorcycle.wheelsTotal}`
  );
}

main();
