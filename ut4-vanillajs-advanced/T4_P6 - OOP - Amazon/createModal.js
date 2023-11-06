import { product_price } from "./Classes/price.js";
import { product_ } from "./Classes/product.js";
import { product_review } from "./Classes/review.js";


export function createModal(img,modal){
let body = document.querySelector("body");

let container = document.createElement("div");
container.setAttribute("class","container");
body.append(container);

img.setAttribute("src",product_.urlImage);
container.append(img);

modal.setAttribute("class","modal");

let modal_content = document.createElement("div");
modal_content.setAttribute("class","modal_content");

let h2 = document.createElement("h2");
h2.textContent=product_.nameProduct;

let price = document.createElement("p");
price.textContent = `Price = ${product_price.current_price}`;

let rating = document.createElement("p");
rating.textContent = `Rating = ${product_review.rating}`;

let total_review = document.createElement("p");
total_review.textContent = `Total Reviews = ${product_review.total_reviews}`;

modal_content.append(h2,price,rating,total_review)

modal.append(modal_content);

container.append(modal);

return img;
}