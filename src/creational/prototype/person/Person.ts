import Address from "../address/Address";

export default class Person {
  name: string;
  address: Address;

  constructor(name: string, address: Address) {
    this.name = name;
    this.address = address;
  }

  clone() {
    return new Person(this.name, this.address.clone());
  }

  toString() {
    return `${this.name} lives at ${this.address}`;
  }
}
