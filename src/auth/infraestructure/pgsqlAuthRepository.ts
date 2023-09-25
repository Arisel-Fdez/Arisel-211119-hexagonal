import { AuthRepository } from '../domain/authRepository';
import UserModel from '../../users/infraestructure/models/userModel'; 
import { comparePasswords } from '../utils/password'; 
import { Auth } from '../domain/auth';

export class PgsqlAuthRepository implements AuthRepository {
    async verifyUser(email: string, password: string): Promise<Auth | null> {
        const user = await UserModel.findOne({ where: { email: email } });
        if (user && await comparePasswords(password, user.password)) {
            return new Auth(user.email, password); // Devuelve un nuevo objeto Auth
        }
        return null;
    }
}
