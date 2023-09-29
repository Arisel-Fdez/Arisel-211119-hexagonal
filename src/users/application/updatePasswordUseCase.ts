import { validate } from "class-validator";
import { UsersRepository } from "../domain/usersRepository";
import { UpdatePasswordDTO } from "../infraestructure/validation/updatePasswordDTO";

export class UpdatePasswordUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(userId: number, newPassword: string): Promise<boolean | string[]> {
        const updatePasswordDto = new UpdatePasswordDTO(userId, newPassword);
        const errors = await validate(updatePasswordDto);
    
        if (errors.length > 0) {
            return errors.map(error => Object.values(error.constraints!).join('; '));
        }
    
        try {
            const wasUpdated = await this.usersRepository.updatePassword(userId, newPassword);
            return wasUpdated;
        } catch (error) {
            console.error("Error in UpdatePasswordUseCase:", error);
            return false;
        }
    }
}