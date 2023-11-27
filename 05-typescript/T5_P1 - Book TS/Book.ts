export class Book{
    title:String;
    author:String;
    pages:number;
    available:boolean;
    constructor(title:String,author:String,pages:number,available:boolean){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.available=available;
    }
}

export function showBook(book:Book){
    console.log(`Título: ${book.title}`);
    console.log(`Autor: ${book.author}`);
    console.log(`Páginas: ${book.pages}`);
    console.log(`Disponible: ${book.available?"Sí":"No"}`);
}