import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(title: string, author: string, code: number, status: string, in_use: boolean): Promise<Book | null> {
        try {
            const createdBook = await this.bookRepository.addBook(title, author, code, status, in_use);
            return createdBook;
        } catch (error) {
            console.error("Error in addBookUseCase:", error);
            return null;
        }
    }
}
