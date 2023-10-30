import { Birth, Director, Movie } from "./OOP-P4";

/*
let test = new Movie(
  "31 de octubre de 1961",
  "Pukerua Bay, Nueva Zelanda",
  "Peter Jackson",
  "Neozelandés",
  ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  "El Señor de los Anillos: La Comunidad del Anillo",
  2001,
  "Fantasía",
  "178",
  "9.2",
  "Un Hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro"
);
*/

describe("Intheritance - Birth class", () => {
  let birthTest = new Birth("31 de octubre de 1961", "Neozelandés");
  it("should gets date and place birth of Peter Jackson", () => {
    expect(birthTest.date).toBe("31 de octubre de 1961");
    expect(birthTest.place).toBe("Neozelandés");
  });
});

describe("Intheritance - Director class", () => {
  let directorTest = new Director(
    "31 de octubre de 1961",
    "Pukerua Bay, Nueva Zelanda",
    "Peter Jackson",
    "Neozelandés",
    ["El Señor de los Anillos", "El Hobbit", "King Kong"]
  );
  it("should gets name,nationality and notableFilmography for Director", () => {
    expect(directorTest.name).toBe("Peter Jackson");
    expect(directorTest.nationality).toBe("Neozelandés");
    expect(directorTest.notableFilmography).toStrictEqual(["El Señor de los Anillos", "El Hobbit", "King Kong"]);
  });
});

describe("Intheritance - Birth class", () => {
  let movieTest = new Movie(  "31 de octubre de 1961",
  "Pukerua Bay, Nueva Zelanda",
  "Peter Jackson",
  "Neozelandés",
  ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  "El Señor de los Anillos: La Comunidad del Anillo",
  2001,
  "Fantasía",
  "178",
  "9.2",
  "Un Hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro");
  it("should gets title year genre,duration,rating and synopsis for El Señor de los Anillos", () => {
    expect(movieTest.title).toBe("El Señor de los Anillos: La Comunidad del Anillo"),
    expect(movieTest.year).toBe(2001),
    expect(movieTest.genre).toBe("Fantasía"),
    expect(movieTest.duration).toBe("178"),
    expect(movieTest.rating).toBe("9.2"),
    expect(movieTest.synopsis).toBe("Un Hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro")
  });
});
