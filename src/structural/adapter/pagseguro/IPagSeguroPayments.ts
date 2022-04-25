import Token from "../auth/Token";

export default interface IPagSeguroPayments {
  authToken(): Token;
  sendPayment(): void;
  receivePayment(): void;
}
