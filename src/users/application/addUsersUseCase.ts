import { validate } from 'class-validator';
import { Users } from "../domain/users";
import { UsersRepository } from "../domain/usersRepository";
import { CreateUserDTO } from '../infraestructure/validation/createUserDTO';
import bcrypt from 'bcrypt';

export class AddUsersUseCase {
    constructor(readonly usersRepository: UsersRepository) {}

    async run(userInput: CreateUserDTO): Promise<{ user: Users } | { errors: string[] }> {
        const errors = await validate(userInput);

        if (errors.length > 0) {
            const errorMessages = errors.map(error => Object.values(error.constraints!)).join(', ');
            return { errors: errorMessages.split(',') };
        }

        const saltRounds = 10;
        userInput.password = await bcrypt.hash(userInput.password, saltRounds);
        const createdUsers = await this.usersRepository.addUsers(userInput.name, userInput.last_name, userInput.email, userInput.password, userInput.phone, userInput.status);
        
        if (!createdUsers) {
            return { errors: ["Failed to create user"] };
        }

        return { user: createdUsers };
    }
}


