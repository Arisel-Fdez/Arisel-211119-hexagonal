import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";
import BookModel from "./models/BookModel";

export class PgsqlBookRepository implements BookRepository {
    async addBook(title: string, author: string, code: number, status: string, in_use: boolean): Promise<Book | null> {
        try {
            const createdBook = await BookModel.create({ title, author, code, status, in_use });
            return new Book(createdBook.id, createdBook.title, createdBook.author, createdBook.code, createdBook.status, createdBook.in_use);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }

    async listAllBooks(): Promise<Book[]> {
        try {
            const books = await BookModel.findAll();
            return books.map(book => new Book(book.id, book.title, book.author, book.code, book.status, book.in_use));
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return [];
        }
    }

    async listInactiveBooks(): Promise<Book[]> {
        try {
            // Suponiendo que los libros inactivos tienen el valor de "status" como "Inactivo"
            const inactiveBooks = await BookModel.findAll({ where: { status: "Inactivo" } });
            return inactiveBooks.map(book => new Book(book.id, book.title, book.author, book.code, book.status, book.in_use));
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return [];
        }
    }
    
    // Cuando implementes otros métodos, los añades aquí.
}
