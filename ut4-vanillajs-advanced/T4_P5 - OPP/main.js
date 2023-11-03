import { Price } from "./Classes/price.js";
import { Product } from "./Classes/product.js";
import { Review } from "./Classes/review.js";

const product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
  "335.80",
  new Price("USD", "399.00"),
  new Review(4.6, 73)
);

const div = document.querySelector("div.container");
const ul = document.createElement("ul");

div.append(ul);

let keys = Object.entries(product);

console.log(keys[5]);

keys.forEach((key) => {
  let li = document.createElement("li");
  if (key[0].includes("price") == true) {
    li.textContent = `${key[0]} = ${key[1].current_price} ${key[1].currency}`;
  } else if (key[0].includes("review") == true) {
    let li2 = document.createElement("li");
    li2.textContent = `${Object.keys(key[1])[0]} = ${key[1].rating}`;
    li.textContent = `${Object.keys(key[1])[1]} = ${key[1].total_reviews}`;
    ul.append(li2);
  } else {
    li.textContent = `${key[0]} = ${key[1]}`;
  }
  ul.append(li);
});
