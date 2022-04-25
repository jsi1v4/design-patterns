import Token from "../auth/Token";
import IPaypalPayments from "./IPaypalPayments";

export default class Paypal implements IPaypalPayments {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }

  paypalPayment(): void {
    this.token = this.authToken();
    console.log("Enviando pagamentos via PayPal.");
  }

  paypalReceive(): void {
    console.log("Recebendo pagamentos via PayPal.");
  }
}
