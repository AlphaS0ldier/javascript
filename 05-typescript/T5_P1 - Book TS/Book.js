"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBook = exports.Book = void 0;
class Book {
    constructor(title, author, pages, available) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.available = available;
    }
}
exports.Book = Book;
function showBook(book) {
    console.log(`Título: ${book.title}`);
    console.log(`Autor: ${book.author}`);
    console.log(`Páginas: ${book.pages}`);
    console.log(`Disponible: ${book.available ? "Sí" : "No"}`);
}
exports.showBook = showBook;
