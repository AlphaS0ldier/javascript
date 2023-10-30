export class Birth {
  date;
  place;
  constructor(date, place) {
    this.date = date;
    this.place = place;
  }

  get date() {
    return this.date;
  }

  set date(value) {
    return (this.date = value);
  }

  get place() {
    return this.place;
  }

  set place(value) {
    return (this.place = value);
  }
}

export class Director extends Birth {
  name;
  nationality;
  notableFilmography;
  constructor(date, place, name, nationality, notableFilmography) {
    super(date, place);
    this.name = name;
    this.nationality = nationality;
    this.notableFilmography = notableFilmography;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    return (this.name = value);
  }

  get nationality() {
    return this.nationality;
  }

  set nationality(value) {
    return (this.nationality = value);
  }

  get notableFilmography() {
    return this.notableFilmography;
  }

  set notableFilmography(value) {
    return (this.notableFilmography = value);
  }
}

export class Movie extends Director {
  title;
  year;
  genre;
  duration;
  rating;
  synopsis;
  constructor(
    date,
    place,
    name,
    nationality,
    notableFilmography,
    title,
    year,
    genre,
    duration,
    rating,
    synopsis
  ) {
    super(date, place, name, nationality, notableFilmography);
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.duration = duration;
    this.rating = rating;
    this.synopsis = synopsis;
  }

  get title() {
    return this.title;
  }

  set title(value) {
    return (this.title = value);
  }

  get year() {
    return this.year;
  }

  set year(value) {
    return (this.year = value);
  }

  get genre() {
    return this.genre;
  }

  set genre(value) {
    return (this.genre = value);
  }

  get duration() {
    return this.duration;
  }

  set duration(value) {
    return (this.duration = value);
  }

  get rating() {
    return this.rating;
  }

  set rating(value) {
    return (this.rating = value);
  }

  get synopsis() {
    return this.synopsis;
  }

  set synopsis(value) {
    return (this.synopsis = value);
  }
}

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
console.log(test);
