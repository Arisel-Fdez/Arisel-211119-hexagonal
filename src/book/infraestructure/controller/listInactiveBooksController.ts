import { Request, Response } from "express";
import { ListInactiveBooksUseCase } from "../../application/listInactiveBooksUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class ListInactiveBooksController {
    constructor(readonly listInactiveBooksUseCase: ListInactiveBooksUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let books = await this.listInactiveBooksUseCase.run();

            res.status(HTTP_STATUS_CODES.OK).send({
                status: "success",
                data: books,
                message: "Listado de libros inactivos recuperado exitosamente"
            });
        } catch (error: any) {
            console.error("Error in ListInactiveBooksController:", error.message);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
