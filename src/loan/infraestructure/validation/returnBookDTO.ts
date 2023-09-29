import { IsNotEmpty, IsInt } from 'class-validator';

export class ReturnBookDTO {
    
    @IsNotEmpty({ message: 'User ID is required' })
    @IsInt({ message: 'User ID should be a number' })
    userId: number;
    
    @IsNotEmpty({ message: 'Book ID is required' })
    @IsInt({ message: 'Book ID should be a number' })
    bookId: number;

    constructor(userId: number, bookId: number) {
        this.userId = userId;
        this.bookId = bookId;
    }
}
