import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";
import BookModel from "./models/BookModel";

export class PgsqlBookRepository implements BookRepository {
    async addBook(title: string): Promise<Book | null> {
        try {
            const createdBook = await BookModel.create({ title });
            return new Book(createdBook.id, createdBook.title);
        } catch (error) {
            console.error("Error adding book:", error);
            return null;
        }
    }
}
