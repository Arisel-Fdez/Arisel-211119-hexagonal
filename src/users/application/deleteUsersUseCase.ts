import { UsersRepository } from "../domain/usersRepository";
import { validate } from "class-validator";
import { DeleteUserDTO } from "../infraestructure/validation/deleteUserDTO";

export class DeleteUserUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(id: number): Promise<boolean | string[]> {
        try {
            const deleteUserDto = new DeleteUserDTO(id);
            const errors = await validate(deleteUserDto);

            if (errors.length > 0) {
                return errors.map(error => Object.values(error.constraints!).join('; '));
            }

            const wasDeleted = await this.usersRepository.deleteUserById(id);
            return wasDeleted;
        } catch (error) {
            console.error("Error in DeleteUserUseCase:", error);
            return false;
        }
    }
}
