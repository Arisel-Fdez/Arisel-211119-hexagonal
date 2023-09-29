import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../application/updateUserUseCase";
import { UpdateUserDTO } from "../validation/updateUserDTO";
import {HTTP_STATUS_CODES} from '../validation/HttpStatusCode';

export class UpdateUserController {
    constructor(readonly updateUserUseCase: UpdateUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const userDto: UpdateUserDTO = {
                id: req.body.id,
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                status: req.body.status
            };
            
            const result = await this.updateUserUseCase.run(userDto);

            if (Array.isArray(result)) { // Es un array de errores
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                    status: "error",
                    data: [],
                    validations: result,
                    message: "Error al actualizar el usuario"
                });
            }

            // Si es un objeto Users, significa que la actualización fue exitosa
            return res.status(HTTP_STATUS_CODES.OK).send({
                status: "success",
                data: {
                    id: result.id,
                    name: result.name,
                    last_name: result.last_name,
                    email: result.email,
                    phone: result.phone,
                    status: result.status,
                },
                message: "Usuario ha sido actualizado exitosamente"
            });

        } catch (error) {
            console.error("Error in UpdateUserController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
