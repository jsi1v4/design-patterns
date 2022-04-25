import Token from "../auth/Token";
import PagSeguro from "../pagseguro/PagSeguro";
import IPaypalPayments from "../paypal/IPaypalPayments";

export default class PagSeguroAdapter implements IPaypalPayments {
  constructor(private pagSeguro: PagSeguro) {
    console.log(
      "Adaptando o PagSeguro utilizando os métodos padrões do PayPal."
    );
  }

  authToken(): Token {
    return this.pagSeguro.authToken();
  }

  paypalPayment(): void {
    this.pagSeguro.sendPayment();
  }

  paypalReceive(): void {
    this.pagSeguro.receivePayment();
  }
}
