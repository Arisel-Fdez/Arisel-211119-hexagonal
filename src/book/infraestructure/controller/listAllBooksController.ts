import { Request, Response } from "express";
import { ListAllBooksUseCase } from "../../application/listAllBooksUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class ListAllBooksController {
    constructor(readonly listAllBooksUseCase: ListAllBooksUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let books = await this.listAllBooksUseCase.run();

            res.status(HTTP_STATUS_CODES.OK).send({
                status: "success",
                data: books,
                message: "Listado de libros recuperado exitosamente"
            });
        } catch (error: any) {
            console.error("Error in ListAllBooksController:", error.message);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
