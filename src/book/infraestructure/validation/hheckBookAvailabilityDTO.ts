import { IsInt, Min } from 'class-validator';

export class CheckBookAvailabilityDTO {
    @IsInt({ message: 'ID should be an integer' })
    @Min(1, { message: 'ID should be a positive number' })
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}
