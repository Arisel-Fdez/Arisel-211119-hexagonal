import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserByPhoneDTO {
    @IsString({ message: 'El número de teléfono debe ser una cadena de texto.' })
    @IsNotEmpty({ message: 'El número de teléfono es obligatorio.' })
    phone: string;

    constructor(phone: string) {
        this.phone = phone;
    }
}
