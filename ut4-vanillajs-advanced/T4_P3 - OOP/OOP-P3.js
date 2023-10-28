let person = {
  name: "John",
  surname: "Doe",
  country: "USA",
  age:32,
  getAge:function(){
    return this.age;
  }
}

export class Persons {
  name;
  surname;
  country;
  age;
  constructor(name, surname, country,age) {
    this.name = name;
    this.surname = surname;
    this.country = country;
    this.age = age;
  }

  get name(){
    return this.name;
  }

  set name(value){
    return this.name=value;
  }

  
  get surname(){
    return this.surname;
  }

  set surname(value){
    return this.surname=value;
  }

  
  get age(){
    return this.age;
  }

  set age(value){
    return this.age=value;
  }

  
  get country(){
    return this.country;
  }

  set country(value){
    return this.country=value;
  }

}


