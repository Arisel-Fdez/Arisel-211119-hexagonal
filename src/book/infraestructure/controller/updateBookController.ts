import { Request, Response } from "express";
import { UpdateBookUseCase } from "../../application/updateBookUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';
import { UpdateBookDTO } from "../validation/updateBookDTEO";

export class UpdateBookController {
    constructor(readonly updateBookUseCase: UpdateBookUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { title, author, code, url, status } = req.body;

            let bookDto = new UpdateBookDTO(id, title, author, code, url, status);
            const updatedBook = await this.updateBookUseCase.run(bookDto);

            if (updatedBook) {
                return res.status(HTTP_STATUS_CODES.OK).send({ status: "success", data: updatedBook });
            } else {
                return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ status: "error", message: "Error al actualizar el libro" });
            }
        } catch (error: any) {
            console.error("Error in UpdateBookController:", error.message);

            if (error.message == HTTP_STATUS_CODES.BAD_REQUEST.toString()) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                    status: "error",
                    message: "Error en la validación",
                    validations: error.details // Si quieres incluir los detalles de validación.
                });
            }

            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
