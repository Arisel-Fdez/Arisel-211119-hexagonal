import { Request, Response } from "express";
import { AddUsersUseCase } from "../../application/addUsersUseCase";
import { HTTP_STATUS_CODES } from "../validation/HttpStatusCode";
import { CreateUserDTO } from "../validation/createUserDTO";

import bcrypt from 'bcrypt';

export class AddUsersController {
    constructor(readonly addUsersUseCase: AddUsersUseCase) { }

    async run(req: Request, res: Response) {
        const userInput = new CreateUserDTO(req.body.name, req.body.last_name, req.body.email, req.body.password, req.body.phone, req.body.status);
        
        const result = await this.addUsersUseCase.run(userInput);
    
        if ("errors" in result) {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({ status: "error", message: result.errors.join(', ') });
        }
    
        if (result.user) {
            return res.status(HTTP_STATUS_CODES.CREATED).send({
                status: "success",
                data: {
                    name: result.user.name,
                    last_name: result.user.last_name,
                    email: result.user.email,
                    phone: result.user.phone,
                    status: result.user.status,
                },
                message: "Usuario ha sido creado exitosamente"
            });
        }
    
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({ status: "error", message: "Error al crear Usuario nuevo, intentalo mas tarde" });
    }
}
