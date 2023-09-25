import { AuthRepository } from '../domain/authRepository';
import { Auth } from '../domain/auth';
import UserModel from '../../users/infraestructure/models/userModel'; // Importando el modelo que ya tienes
import { comparePasswords } from '../utils/password'; // Asegúrate de tener este helper para comparar contraseñas

export class PgsqlAuthRepository implements AuthRepository {
    async verifyUser(credentials: Auth): Promise<Auth | null> {
        const user = await UserModel.findOne({ where: { email: credentials.email } });
        if (user && await comparePasswords(credentials.password, user.password)) {
            return credentials;
        }
        return null;
    }
}
