import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import IPaypalPayments from "./paypal/IPaypalPayments";

function main() {
  const payment: IPaypalPayments = new MercadoPagoAdapter(new MercadoPago());
  // const payment: IPayPalPayments = new PayonnerAdapter(new Payonner());
  // const payment: IPayPalPayments = new PayPal();

  payment.paypalPayment();
  payment.paypalReceive();
}

main();
