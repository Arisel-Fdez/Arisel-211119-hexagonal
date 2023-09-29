import { IsNotEmpty, IsString } from 'class-validator';

export class BookCodeDTO {
    @IsNotEmpty({ message: 'Code is required' })
    @IsString({ message: 'Code should be a string' })
    code: string;

    constructor(code: string) {
        this.code = code;
    }
}
