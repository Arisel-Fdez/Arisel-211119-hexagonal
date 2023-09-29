import { validate } from 'class-validator';
import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { BookRepository } from "../domain/bookRepository";
import { BookCodeDTO } from '../infraestructure/validation/bookCodeDTO';
import { Book } from '../domain/book';

export class GetBookByCodeUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(dto: BookCodeDTO): Promise<Book | null> {
        const validationErrors = await validate(dto);
        if (validationErrors.length > 0) {
            console.error("Validation failed in GetBookByCodeUseCase:", validationErrors);
            throw new Error(HTTP_STATUS_CODES.BAD_REQUEST.toString());
        }
        return this.bookRepository.getBookByCode(dto.code);
    }
}
