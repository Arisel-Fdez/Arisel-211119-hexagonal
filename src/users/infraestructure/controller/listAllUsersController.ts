import { Request, Response } from "express";
import { ListAllUsersUseCase } from "../../application/listAllUsersUseCase";
import { HTTP_STATUS_CODES } from "../validation/HttpStatusCode";  // Asegúrate de ajustar la ruta

export class ListAllUsersController {
    constructor(readonly listAllUsersUseCase: ListAllUsersUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const users = await this.listAllUsersUseCase.run();
            return res.status(HTTP_STATUS_CODES.OK).json({
                status: "success",
                data: users,
                message: "Usuarios recuperados exitosamente"
            });
        } catch (error) {
            console.error("Error in ListAllUsersController:", error);
            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
