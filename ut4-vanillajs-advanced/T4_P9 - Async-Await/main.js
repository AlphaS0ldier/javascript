import {cars} from "./mockData.js";
import {Car,createArrayCar,filterCar} from "./Car.js";

const filtered_array=await filterCar(await createArrayCar(cars));

let container = document.querySelector("div.container");

filtered_array.forEach(element => {
    let div = document.createElement("div");
    let p1 =document.createElement("p");
    let p2 =document.createElement("p");

    p1.textContent = `Model: ${element.model}, Make: ${element.make}`;
    p2.textContent = `Type: ${element.type}, Year: ${element.year}`;

    div.append(p1,p2);
    
    container.append(div);
});
