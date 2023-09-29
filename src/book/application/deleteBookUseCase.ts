import { validate } from 'class-validator';
import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { BookRepository } from "../domain/bookRepository";
import { BookIdDTO } from '../infraestructure/validation/bookIdDTO';

export class DeleteBookUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(dto: BookIdDTO): Promise<boolean> {
        const validationErrors = await validate(dto);
        if (validationErrors.length > 0) {
            console.error("Validation failed in DeleteBookUseCase:", validationErrors);
            throw new Error(HTTP_STATUS_CODES.BAD_REQUEST.toString());
        }
        return this.bookRepository.deleteBook(dto.id);
    }
}
