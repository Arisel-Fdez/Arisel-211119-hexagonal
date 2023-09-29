import { IsNumber, IsOptional, IsString, IsEmail, IsIn } from 'class-validator';

export class UpdateUserDTO {
    @IsNumber()
    id!: number;

    @IsOptional()
    @IsString({ message: 'Name should be a string' })
    name?: string;

    @IsOptional()
    @IsString({ message: 'Last name should be a string' })
    last_name?: string;

    @IsOptional()
    @IsEmail({}, { message: 'Email should be a valid email address' })
    email?: string;

    @IsOptional()
    @IsString({ message: 'Phone should be a string' })
    phone?: string;

    @IsOptional()
    @IsIn(['active', 'inactive'], { message: 'Status should be either active or inactive' })
    status?: string;
}
