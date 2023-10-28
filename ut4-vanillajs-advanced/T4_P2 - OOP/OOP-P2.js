const list_books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

export class Books {
  #title;
  #author;
  published;
  constructor(title, author, published) {
    this.#title = title;
    this.#author = author;
    this.published = published;
  }

  get title() {
    return this.#title;
  }

  
  set title(value){
    return this.#title=value;
  }

  get author() {
    return this.#author;
  }

  
  set author(value){
    return this.#author=value;
  }

}

/*

    let arr_objects = [];

    for(let element of list_books) {

      let arr_obj_books = new Books(
        { ...element }.title,
        { ...element }.author,
        { ...element }.published
      );

      let arr_object = [
    arr_obj_books.title
        ,
     arr_obj_books.author
        ,
     arr_obj_books.published
      ];

      arr_objects.push(arr_object);
    };
*/

