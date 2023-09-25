import { generateToken } from '../utils/jwt';
import { AuthRepository } from '../domain/authRepository';

type AuthResponse = { 
    status: 'success' | 'error', 
    token?: string, 
    message?: string 
};

export class AuthUseCase {
    deactivateUserSession(email: any) {
        throw new Error('Method not implemented.');
    }
    constructor(private authRepository: AuthRepository) {}

    async run(email: string, password: string): Promise<AuthResponse> {
        const user = await this.authRepository.verifyUser(email, password);
        if (user) {
            const token = generateToken({ email: user.email });
            
            // Cambiar el estado del usuario a "Activo"
            await this.authRepository.setUserStatus(email, 'Activo');
            
            return {
                status: 'success',
                token
            };
        } else {
            return {
                status: 'error',
                message: 'Credenciales inválidas'
            };
        }
    }
}
