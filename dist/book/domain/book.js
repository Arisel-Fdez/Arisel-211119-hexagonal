"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author, code, status, in_use) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.code = code;
        this.status = status;
        this.in_use = in_use;
    }
}
exports.Book = Book;
