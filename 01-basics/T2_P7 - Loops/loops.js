const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let person = [];
  for (let i = 0; i < persons.length; i++) {
    person.push(persons[i].name);
  }
  return person;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let person = [];
  let i = 0;
  do {
    person.push(persons[i].name);
    i++;
  } while (i < persons.length);
  return person;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let person = [];
  let i = 0;
  while (i < persons.length) {
    person.push(persons[i].name);
    i++;
  }
  return person;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let person = [];
  for (let i = 0; i < persons.length; i++) {
    person.push(persons[i].age);
  }
  return person;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let person = [];
  let i = 0;
  do {
    person.push(persons[i].age);
    i++;
  } while (i < persons.length);
  return person;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let person = [];
  let i = 0;
  while (i < persons.length) {
    person.push(persons[i].age);
    i++;
  }
  return person;
};
