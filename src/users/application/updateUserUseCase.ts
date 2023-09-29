import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";
import { UpdateUserDTO } from '../infraestructure/validation/updateUserDTO';
import { validate } from 'class-validator';
import { UpdatableUserFields } from "../domain/updatableUserFields";

export class UpdateUserUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(userDto: UpdateUserDTO): Promise<string[] | Users> {
        const errors = await validate(userDto);
        if (errors.length > 0) {
            return errors.map(error => Object.values(error.constraints || {})).flat();
        }
    
        try {
            const updatedUser = await this.usersRepository.updateUser(userDto as unknown as UpdatableUserFields);
            return updatedUser || ['Failed to update user'];
        } catch (error) {
            console.error("Error in UpdateUserUseCase:", error);
            return ['Internal server error'];
        }
    }
}