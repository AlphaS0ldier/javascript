export class Product{
    nameProduct;
    urlProduct;
    urlImage;
    score;
    constructor(nameProduct,urlProduct,urlImage,score) {
      this.nameProduct=nameProduct;
      this.urlProduct=urlProduct;
      this.urlImage=urlImage;
      this.score=score;
    }
  }
  export let product_ = new Product("New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan","https://www.amazon.com/dp/B087623TMW","https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg","335.80");