import { AuthRepository } from '../domain/authRepository';
import UserModel from '../../users/infraestructure/models/userModel'; 
import { comparePasswords } from '../utils/password'; 
import { Auth } from '../domain/auth';

export class PgsqlAuthRepository implements AuthRepository {
    async verifyUser(email: string, password: string): Promise<Auth | null> {
        const user = await UserModel.findOne({ where: { email: email } });
        if (user && await comparePasswords(password, user.password)) {
            
            // Actualiza el status a activo
            user.status = 'activo';
            await user.save();

            return new Auth(user.email, user.password); 
        }
        return null;
    }

    async setInactive(email: string): Promise<void> {
        const user = await UserModel.findOne({ where: { email: email } });
        if (user) {
            user.status = 'inactivo';
            await user.save();
        }
    }

    
}
