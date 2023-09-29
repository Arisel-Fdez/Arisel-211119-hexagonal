import { validate } from 'class-validator';
import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { BookRepository } from "../domain/bookRepository";
import { CheckBookAvailabilityDTO } from '../infraestructure/validation/hheckBookAvailabilityDTO';

export class CheckBookAvailabilityUseCase {
    constructor(readonly bookRepository: BookRepository) {}

    async run(BookDto: CheckBookAvailabilityDTO): Promise<string> {
        const validationErrors = await validate(BookDto);
        if (validationErrors.length > 0) {
            console.error("Validation failed in CheckBookAvailabilityUseCase:", validationErrors);
            throw new Error(HTTP_STATUS_CODES.BAD_REQUEST.toString());
        }

        return this.bookRepository.checkBookAvailability(BookDto.id);
    }
}
