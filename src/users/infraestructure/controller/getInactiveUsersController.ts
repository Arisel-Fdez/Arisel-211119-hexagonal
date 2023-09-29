import { Request, Response } from "express";
import { GetInactiveUsersUseCase } from "../../application/getInactiveUsersUseCase";
import { HTTP_STATUS_CODES } from "../validation/HttpStatusCode";  // Asegúrate de ajustar la ruta

export class GetInactiveUsersController {
    constructor(readonly getInactiveUsersUseCase: GetInactiveUsersUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const inactiveUsers = await this.getInactiveUsersUseCase.run();
            
            if (inactiveUsers.length > 0) {
                return res.status(HTTP_STATUS_CODES.OK).json({
                    status: "success",
                    data: inactiveUsers,
                    message: "Usuarios inactivos recuperados exitosamente"
                });
            } else {
                return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({
                    status: "error",
                    data: [],
                    message: "No se encontraron usuarios inactivos"
                });
            }
        } catch (error) {
            console.error("Error in GetInactiveUsersController:", error);
            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
