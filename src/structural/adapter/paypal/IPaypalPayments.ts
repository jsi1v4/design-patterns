import Token from "../auth/Token";

export default interface IPaypalPayments {
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
}
