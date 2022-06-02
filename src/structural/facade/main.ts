import CustomerService from "./facade/CustomerService";

function main() {
  let service = new CustomerService();
  service.callToPayment();
}

main();
