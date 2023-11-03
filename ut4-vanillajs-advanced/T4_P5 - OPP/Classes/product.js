export class Product{
    nameProduct;
    urlProduct;
    urlImage;
    score;
    price;
    review;
    constructor(nameProduct,urlProduct,urlImage,score,price,review) {
      this.score=score;
      this.nameProduct=nameProduct;
      this.urlImage=urlImage;
      this.urlProduct=urlProduct;
      this.price=price;
      this.review=review;
    }
  }