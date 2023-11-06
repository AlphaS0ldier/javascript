export class Review{
    rating;
    total_reviews;
    constructor(rating,total_reviews){
      this.rating=rating;
      this.total_reviews=total_reviews;
    }
  }

export let product_review = new Review(4.6,73);