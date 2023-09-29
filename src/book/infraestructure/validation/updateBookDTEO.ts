import { IsString, IsNotEmpty, IsUrl, IsIn, IsInt } from 'class-validator';

export class UpdateBookDTO {
    @IsInt({ message: 'ID should be a valid number' })
    @IsNotEmpty({ message: 'ID is required' })
    id: number;

    @IsNotEmpty({ message: 'Title is required' })
    @IsString({ message: 'Title should be a string' })
    title: string;

    @IsNotEmpty({ message: 'Author is required' })
    @IsString({ message: 'Author should be a string' })
    author: string;

    @IsNotEmpty({ message: 'Code is required' })
    @IsString({ message: 'Code should be a string' })
    code: string;

    @IsUrl({}, { message: 'URL should be a valid URL' })
    url: string;

    @IsIn(['activo', 'inactivo'], { message: 'Status should be either ACTIVE or INACTIVE' })
    status: string;

    constructor(id: number, title: string, author: string, code: string, url: string, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.code = code;
        this.url = url;
        this.status = status;
    }
}
