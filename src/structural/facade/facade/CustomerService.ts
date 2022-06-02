import Payment from "../departments/Payment";
import Store from "../departments/Store";
import Warehouse from "../departments/Warehouse";

export default class CustomerService {
  private paymentDepartment = new Payment();
  private storeDepartment = new Store();
  private warehouseDepartment = new Warehouse();

  constructor() {}

  callToPayment() {
    this.paymentDepartment.call();
  }

  callToStore() {
    this.storeDepartment.call();
  }

  callToWarehouse() {
    this.warehouseDepartment.call();
  }
}
