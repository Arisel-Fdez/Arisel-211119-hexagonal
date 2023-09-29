import { BookRepository } from '../domain/bookRepository';

export class ListInactiveBooksUseCase {
    constructor(readonly bookRepository: BookRepository) { }

    async run() {
        try {
            return await this.bookRepository.listInactiveBooks();
        } catch (error) {
            console.error("Error in ListInactiveBooksUseCase:", error);
            throw new Error('Error retrieving the list of inactive books.');
        }
    }
}
