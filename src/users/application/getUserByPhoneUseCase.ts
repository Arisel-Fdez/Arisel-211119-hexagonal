import { validate } from "class-validator";
import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";
import { GetUserByPhoneDTO } from "../infraestructure/validation/getUserByPhoneDTO";


export class GetUserByPhoneUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(phone: string): Promise<Users | string[] | null> {
        const getUserByPhoneDto = new GetUserByPhoneDTO(phone);
        const errors = await validate(getUserByPhoneDto);
    
        if (errors.length > 0) {
            return errors.map(error => Object.values(error.constraints!).join('; '));
        }
    
        return this.usersRepository.getUserByPhone(phone);
    }
    
}
