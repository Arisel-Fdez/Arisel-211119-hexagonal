import { validate } from 'class-validator';
import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";
import { UpdateBookDTO } from '../infraestructure/validation/updateBookDTEO';

export class UpdateBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(BookDto: UpdateBookDTO): Promise<Book | null> {
        const validationErrors = await validate(BookDto);
        if (validationErrors.length > 0) {
            console.error("Validation failed in UpdateBookUseCase:", validationErrors);
            throw new Error(HTTP_STATUS_CODES.BAD_REQUEST.toString());
        }

        return this.bookRepository.updateBook(
            BookDto.id,
            BookDto.title,
            BookDto.author,
            BookDto.code,
            BookDto.url,
            BookDto.status
        );
    }
}
