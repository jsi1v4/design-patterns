import Token from "../auth/Token";
import IPagSeguroPayments from "./IPagSeguroPayments";

export default class PagSeguro implements IPagSeguroPayments {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }

  sendPayment(): void {
    this.token = this.authToken();
    console.log("Enviando pagamentos via PagSeguro.");
  }

  receivePayment(): void {
    console.log("Recebendo pagamentos via PagSeguro.");
  }
}
