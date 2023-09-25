import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";
import UserModel from "./models/userModel";

export class PgsqlUsersRepository implements UsersRepository {

    async addUsers(name: string, last_name: string, email: string, password: string, phone: string, status: string): Promise<Users | null> {
        try {
            const createdUsers = await UserModel.create({ name, last_name, email, password, phone, status});
            return new Users(createdUsers.id, createdUsers.name, createdUsers.last_name, createdUsers.email, createdUsers.password, createdUsers.phone, createdUsers.status);
        } catch (error) {
            console.error("Error in PgsqlBookRepository:", error);
            return null;
        }
    }

    async getAllUsers(): Promise<Users[]> {
        const users = await UserModel.findAll();
        return users.map(user => new Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status));
    }
    
    async deleteUserById(id: number): Promise<boolean> {
        try {
            const result = await UserModel.destroy({ where: { id } });
            return result > 0; // Retorna true si se eliminó al menos un registro.
        } catch (error) {
            console.error("Error in PgsqlUsersRepository:", error);
            return false;
        }
    }
    
    async getUserByPhone(phone: string): Promise<Users | null> {
        const user = await UserModel.findOne({ where: { phone: phone } });
        if (!user) return null;
        return new Users(user.id, user.name, user.last_name, user.email, user.password, user.phone, user.status);
    }

}
