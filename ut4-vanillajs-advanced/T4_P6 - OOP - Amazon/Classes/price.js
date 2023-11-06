export class Price{
    currency;
    current_price;
    constructor(currency,current_price) {
      this.currency=currency;
      this.current_price=current_price;
    }
  }

  
export let product_price = new Price("USD","399.00");