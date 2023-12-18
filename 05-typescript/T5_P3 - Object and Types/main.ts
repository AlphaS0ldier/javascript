type Movie = {
    title: string;
    director: {
      name: string;
      nationality: string;
      birth: {
        date: string;
        place: string;
      },
      notableFilmography:string[],
    },
    year: number,
    genre: string;
    duration: number,
    rating: number,
    characters:       {
        name: string;
        actor: string;
        description:
          string;
      }[
    ]
    synopsis:
      string;
  };

  let movie:Movie = {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    director: {
      name: "Peter Jackson",
      nationality: "Neozelandés",
      birth: {
        date: "31 de octubre de 1961",
        place: "Pukerua Bay, Nueva Zelanda",
      },
      notableFilmography: ["El Señor de los Anillos", "El Hobbit", "King Kong"],
    },
    year: 2001,
    genre: "Fantasía",
    duration: 178,
    rating: 9.2,
    characters: [
      {
        name: "Frodo Baggins",
        actor: "Elijah Wood",
        description:
          "El portador del Anillo Único, encargado de destruirlo en el Monte del Destino.",
      },
      {
        name: "Gandalf",
        actor: "Ian McKellen",
        description:
          "Un poderoso mago y consejero que guía a Frodo en su misión.",
      },
      {
        name: "Aragorn",
        actor: "Viggo Mortensen",
        description:
          "Un guerrero y futuro rey que se une a la Comunidad para proteger a Frodo.",
      },
    ],
    synopsis:
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.",
  };