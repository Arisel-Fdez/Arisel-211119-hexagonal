import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, Matches, IsIn } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString({ message: 'Name should be a string' })
    name: string;

    @IsNotEmpty({ message: 'Last name is required' })
    @IsString({ message: 'Last name should be a string' })
    last_name: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email should be a valid email address' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(8, { message: 'Password should be minimum 8 characters' })
    @MaxLength(20, { message: 'Password should be maximum 20 characters' })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password too weak'
    })
    password: string;

    @IsNotEmpty({ message: 'Phone is required' })
    @IsString({ message: 'Phone should be a string' })
    phone: string;

    @IsNotEmpty({ message: 'Status is required' })
    @IsIn(['activo', 'inactivo'], { message: 'Status should be either active or inactive' })
    status: string;

    constructor(name: string, last_name: string, email: string, password: string, phone: string, status: string = "inactive") {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.status = status;
    }
}
