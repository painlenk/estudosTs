type TCurrency = "BRL" | "USD";
enum EnCurrency {
  BRL = "BRL",
  USD = "USD",
}

function payment(value: number, currency: TCurrency): void {
  console.log(`payment successful : value ${value}${currency}`);
}

payment(299.9, EnCurrency.BRL);
