import Token from "../auth/Token";
import IMercadoPagoPayments from "./IMercadoPagoPayments";

export default class MercadoPago implements IMercadoPagoPayments {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }

  enviarPagamento(): void {
    this.token = this.authToken();
    console.log("Enviando pagamentos via MercadoPago.");
  }

  receberPagamento(): void {
    console.log("Recebendo pagamentos via MercadoPago.");
  }
}
