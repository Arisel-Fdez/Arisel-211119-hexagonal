import { PgsqlAuthRepository } from './pgsqlAuthRepository';
import { AuthRepository } from '../domain/authRepository';
import { AuthUseCase } from '../application/authUseCase';
import { AuthController } from './controller/authController';


export const authRepository: AuthRepository = new PgsqlAuthRepository();

export const authUseCase = new AuthUseCase(authRepository);
export const authController = new AuthController(authUseCase);


