import { BookRepository } from '../domain/bookRepository';

export class ListAllBooksUseCase {
    constructor(readonly bookRepository: BookRepository) { }

    async run() {
        try {
            return await this.bookRepository.listAllBooks();
        } catch (error) {
            console.error("Error in ListAllBooksUseCase:", error);
            throw new Error('Error retrieving the list of books.');
        }
    }
}
