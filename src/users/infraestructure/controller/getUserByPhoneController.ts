import { Request, Response } from "express";
import { GetUserByPhoneUseCase } from "../../application/getUserByPhoneUseCase";
import { HTTP_STATUS_CODES } from "../validation/HttpStatusCode";

export class GetUserByPhoneController {
    constructor(readonly getUserByPhoneUseCase: GetUserByPhoneUseCase) {}

    async run(req: Request, res: Response) {
        const result = await this.getUserByPhoneUseCase.run(req.params.phone);
    
        if (Array.isArray(result)) { // Es un array de errores
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                status: "error",
                validations: result,
                message: "Error al intentar recuperar el usuario por número de teléfono"
            });
        }
    
        if (result) { // Si se encontró un usuario
            return res.status(HTTP_STATUS_CODES.OK).send(result);
        } else { // Si no se encontró un usuario o es null
            return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
                message: "Usuario no encontrado."
            });
        }
    }
}
