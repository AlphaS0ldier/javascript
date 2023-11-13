import { cars } from "./mockData.js";

export class Car {
  #id;
  make;
  constructor(id, make) {
    this.#id = id;
    this.make = make;
  }
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
}

export const createArrayCar =async  (value) => {
  return new Promise((resolve) => {
    resolve(
      value.map((car) => {
        let obj = new Car(car.id, car.make);
        obj.year = car.year;
        obj.model = car.model;
        obj.type = car.type;
        return obj;
      })
    );
  });
};

export const filterCar =async (array) => {
  return new Promise(resolve=>{
    resolve(
        array.filter((car) => car.year >= 2010)
      );
  });
};

//console.log(await filterCar(await createArrayCar()));
