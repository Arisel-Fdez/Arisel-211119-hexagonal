import { Request, Response } from "express";
import { UpdatePasswordUseCase } from "../../application/updatePasswordUseCase";
import { HTTP_STATUS_CODES } from "../validation/HttpStatusCode";

export class UpdatePasswordController {
    constructor(readonly updatePasswordUseCase: UpdatePasswordUseCase) { }

    async run(req: Request, res: Response) {
        const { userId, newPassword } = req.body;
        const result = await this.updatePasswordUseCase.run(userId, newPassword);
    
        if (Array.isArray(result)) { // Es un array de errores
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                status: "error",
                validations: result,
                message: "Error al intentar actualizar la contraseña"
            });
        }
    
        if (result) {
            return res.status(HTTP_STATUS_CODES.OK).send({
                status: "success",
                message: "Contraseña ha sido actualizada exitosamente"
            });
        } else {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                status: "error",
                message: "Error al actualizar la contraseña"
            });
        }
    }
}
