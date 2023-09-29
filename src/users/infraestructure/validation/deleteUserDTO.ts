import { IsInt, IsNotEmpty } from 'class-validator';

export class DeleteUserDTO {
    @IsInt({ message: 'ID should be an integer' })
    @IsNotEmpty({ message: 'ID is required' })
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}
