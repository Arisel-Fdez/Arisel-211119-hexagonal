import { validate } from 'class-validator';
import { BookDto } from '../infraestructure/validation/DTOBook';
import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(BookDto: BookDto): Promise<Book | null> {
        const validationErrors = await validate(BookDto);
        if (validationErrors.length > 0) {
            console.error("Validation failed in addBookUseCase:", validationErrors);
            throw new Error(HTTP_STATUS_CODES.BAD_REQUEST.toString());
        }

        try {
            const createdBook = await this.bookRepository.addBook(
                BookDto.title,
                BookDto.author,
                BookDto.code,
                BookDto.url,
                BookDto.status
            );
            return createdBook;
        } catch (error) {
            console.error("Error in addBookUseCase:", error);
            return null;
        }
    }
}
