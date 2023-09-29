import { IsNotEmpty, IsInt, IsString, Length } from 'class-validator';

export class UpdateReviewDTO {

    @IsNotEmpty({ message: 'Review ID is required' })
    @IsInt({ message: 'Review ID should be a number' })
    id: number;

    @IsNotEmpty({ message: 'User ID is required' })
    @IsInt({ message: 'User ID should be a number' })
    userId: number;

    @IsNotEmpty({ message: 'Book ID is required' })
    @IsInt({ message: 'Book ID should be a number' })
    bookId: number;

    @IsNotEmpty({ message: 'Message is required' })
    @IsString({ message: 'Message should be a string' })
    @Length(1, 250, { message: 'Message length should be between 1 and 250 characters' })
    msg: string;

    constructor(id: number, userId: number, bookId: number, msg: string) {
        this.id = id;
        this.userId = userId;
        this.bookId = bookId;
        this.msg = msg;
    }
}
