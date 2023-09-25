import { generateToken } from '../utils/jwt';
import { comparePasswords } from '../utils/password';
import { AuthRepository } from '../domain/authRepository';

export class AuthUseCase {
    constructor(private authRepository: AuthRepository) {}

    async run(email: string, password: string): Promise<string | null> {
        const user = await this.authRepository.verifyUser(email, password);
        if (user) {
            // En este punto, ya hemos verificado el email y la contraseña.
            return generateToken({ email: user.email }); // No necesitas userId aquí a menos que también lo agregues a la clase Auth.
        }
        return null;
    }
}
