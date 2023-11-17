import { getApi} from "./apiCars.js";
import { createItemsFromCars,filterCar } from "./Car.js";
import { createFilter } from "./generateFilters.js";

let cars =await getApi();

let arr = ["Year", "Make", "Model", "Type"];
arr.forEach((element) => createFilter(element,cars));

let arrOption = document.querySelectorAll(".filters div");

arrOption.forEach((element) => {
  element.addEventListener("change", async () => {

    let arrayValue=[];

    arrOption.forEach((ele)=>{
        arrayValue.push({[ele.getAttribute("id")]:ele.querySelector("select").value});
    })

    let arrayFiltered=[];

    for (let val of Object.values(arrayValue)) {
        let key=Object.keys(val)[0];
        let value =Object.values(val)[0];
        (key=="year")?
        arrayFiltered=await filterCar(cars, key,value)
        :
        arrayFiltered=await filterCar(arrayFiltered,key,value);
    }
    await createItemsFromCars(arrayFiltered);
  });
});
