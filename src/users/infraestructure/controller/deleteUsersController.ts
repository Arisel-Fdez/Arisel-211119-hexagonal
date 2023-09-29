import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/deleteUsersUseCase";
import {HTTP_STATUS_CODES} from '../validation/HttpStatusCode';

export class DeleteUserController {
    constructor(readonly deleteUserUseCase: DeleteUserUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await this.deleteUserUseCase.run(Number(id));

            if (Array.isArray(result)) { // Es un array de errores
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                    status: "error",
                    validations: result,
                    message: "Error al intentar eliminar el usuario"
                });
            }

            if (result) {
                return res.status(HTTP_STATUS_CODES.OK).send({
                    status: "success",
                    message: "Usuario eliminado exitosamente"
                });
            }

            res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
                status: "error",
                message: "Usuario no encontrado"
            });
        } catch (error) {
            console.error("Error in DeleteUserController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
