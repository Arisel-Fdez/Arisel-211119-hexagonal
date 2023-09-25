import { PgsqlUsersRepository } from "./pgsqlUsersRepository";
import { AddUsersUseCase } from "../application/addUsersUseCase";
import { AddUsersController } from "./controller/addUsersController";
import { ListAllUsersController } from "./controller/listAllUsersController";
import { ListAllUsersUseCase } from "../application/listAllUsersUseCase";
import { GetUserByPhoneController } from "./controller/getUserByPhoneController";
import { GetUserByPhoneUseCase } from "../application/getUserByPhoneUseCase";
import { DeleteUserUseCase } from "../application/deleteUsersUseCase";
import { DeleteUserController } from "./controller/deleteUsersController";


export const pgsqlUsersRepository = new PgsqlUsersRepository();

export const addUsersUseCase = new AddUsersUseCase(pgsqlUsersRepository);
export const addUsersController = new AddUsersController(addUsersUseCase);

export const listAllUsersUseCase = new ListAllUsersUseCase(pgsqlUsersRepository);
export const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export const getUserByPhoneUseCase = new GetUserByPhoneUseCase(pgsqlUsersRepository);
export const getUserByPhoneController = new GetUserByPhoneController(getUserByPhoneUseCase);

export const deletedUsersUseCase = new DeleteUserUseCase(pgsqlUsersRepository);
export const deleteUserController = new DeleteUserController(deletedUsersUseCase);