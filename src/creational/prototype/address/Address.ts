export default class Address {
  streetAddress: string;
  city: string;
  country: string;

  constructor(streetAddress: string, city: string, country: string) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  clone() {
    return new Address(this.streetAddress, this.city, this.country);
  }

  toString() {
    return `Address: ${this.streetAddress}, ` + `${this.city}, ${this.country}`;
  }
}
