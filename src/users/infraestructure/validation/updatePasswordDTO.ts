import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePasswordDTO {
    @IsInt({ message: 'El ID del usuario debe ser un número.' })
    @IsNotEmpty({ message: 'El ID del usuario es obligatorio.' })
    userId: number;

    @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    newPassword: string;

    constructor(userId: number, newPassword: string) {
        this.userId = userId;
        this.newPassword = newPassword;
    }
}
