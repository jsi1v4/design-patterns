import Token from "../auth/Token";

export default interface IMercadoPagoPayments {
  authToken(): Token;
  enviarPagamento(): void;
  receberPagamento(): void;
}
