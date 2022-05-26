import Person from "./person/Person";
import Address from "./address/Address";

function main() {
  const john = new Person(
    "John",
    new Address("123 London Road", "London", "UK")
  );

  // const jane = john;
  const jane = john.clone();

  jane.name = "Jane";
  jane.address.streetAddress = "321 Angel St";

  console.log(john.toString());
  console.log(jane.toString());
}

main();
