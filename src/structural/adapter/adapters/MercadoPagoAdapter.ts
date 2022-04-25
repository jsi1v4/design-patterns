import Token from "../auth/Token";
import MercadoPago from "../mercadopago/MercadoPago";
import IPaypalPayments from "../paypal/IPaypalPayments";

export default class MercadoPagoAdapter implements IPaypalPayments {
  constructor(private mercadoPago: MercadoPago) {
    console.log(
      "Adaptando o Mercado Pago utilizando os métodos padrões do PayPal."
    );
  }

  authToken(): Token {
    return this.mercadoPago.authToken();
  }

  paypalPayment(): void {
    this.mercadoPago.enviarPagamento();
  }

  paypalReceive(): void {
    this.mercadoPago.receberPagamento();
  }
}
