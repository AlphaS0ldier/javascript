import { cars } from "./mockData.js";
import { createItemsFromCars,filterCar } from "./Car.js";

export function createFilter(type) {

  let div = document.createElement("div");
  div.setAttribute("id",type.toLowerCase());

  let p = document.createElement("p");
  p.textContent = `${type}:`;
  
  div.append(p);

  let select = document.createElement("select");

  let arrObj = [];

  cars.forEach((element) => {
    let option = document.createElement("option");

    for (const [key, value] of Object.entries(element)) {
      if (key == type.toLowerCase()) {
        if (arrObj.includes(value) == false) {
          option.textContent = value;
          arrObj.push(value);
          select.append(option);
        }
      }
    }
  });

  let option = document.createElement("option");
  option.textContent = "ALL";
  option.setAttribute("selected", "selected");

  select.append(option);
  div.append(select);
  
  document.querySelector(".filters").append(div);
}
