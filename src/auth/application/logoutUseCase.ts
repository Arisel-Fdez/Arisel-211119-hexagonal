import { AuthRepository } from '../domain/authRepository';

export class LogoutUseCase {
    constructor(private authRepository: AuthRepository) {}

    async run(email: string): Promise<void> {
        await this.authRepository.setInactive(email);
        // Aquí puedes agregar lógicas adicionales relacionadas con el cierre de sesión si es necesario
    }
}
