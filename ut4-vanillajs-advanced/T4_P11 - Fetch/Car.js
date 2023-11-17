export class Car {
  make;
  constructor(make) {
    this.make = make;
  }
}

export const createArrayCar = async (value) => {
  return new Promise((resolve) => {
    resolve(
      value.map((car) => {
        let obj = new Car(car.make);
        obj.year = car.year;
        obj.model = car.model;
        obj.type = car.type;
        return obj;
      })
    );
  });
};

export const filterCar = async (array, type, value) => {
  return new Promise((resolve) => {
    if (value == "ALL") {
      resolve(array);
    } else {
      resolve(array.filter((car) => car[`${type.toLowerCase()}`] == value));
    }
  });
};

//console.log(await filterCar(await createArrayCar(cars),"year",2021));

export async function createItemsFromCars(array) {
  const filtered_array = await createArrayCar(array);

  let container = document.querySelector("div.container");
  container.remove();

  container = document.createElement("div");
  container.setAttribute("class", "container");
  document.querySelector("body").append(container);

  filtered_array.forEach((element) => {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let span11 = document.createElement("span");
    let span12 = document.createElement("span");
    let span21 = document.createElement("span");
    let span22 = document.createElement("span");

    span11.textContent = `${element.model}`;
    span12.textContent = `${element.make}`;
    span21.textContent = `${element.type}`;
    span22.textContent = `${element.year}`;

    p1.append("Model: ", span11, ", Make: ", span12);
    p2.append("Type: ", span21, ", Year: ", span22);

    div.append(p1, p2);
    container.append(div);
  });
}

//console.log(await filterCar(await createArrayCar(cars),"ALL",2010));
