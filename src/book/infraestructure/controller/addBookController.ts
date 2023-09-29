import { Request, Response } from "express";
import { AddBookUseCase } from "../../application/addBookUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';
import { BookDto } from "../validation/addBookDTO";

export class AddBookController {
    constructor(readonly addBookUseCase: AddBookUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let bookDto = new BookDto(req.body.title, req.body.author, req.body.code, req.body.url, req.body.status);
            let createdBook = await this.addBookUseCase.run(bookDto);

            if (createdBook) {
                return res.status(HTTP_STATUS_CODES.CREATED).send({
                    status: "success",
                    data: {
                        id: createdBook.id,
                        title: createdBook.title,
                        author: createdBook.author,
                        code: createdBook.code,
                        url: createdBook.url,
                        status: createdBook.status
                    },
                    message: "El libro ha sido creado exitosamente"
                });
            }

            res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                status: "error",
                data: [],
                validations: [], // Puedes llenar esto si tu UseCase devuelve los errores de validación
                message: "Error al crear un libro nuevo, intentalo mas tarde"
            });
        } catch (error: any) {  // Aquí estamos usando Type Assertion.
            console.error("Error in AddBookController:", error.message);

            if (error.message == HTTP_STATUS_CODES.BAD_REQUEST.toString()) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                    status: "error",
                    message: "Error en la validación",
                    validations: error.details // Suponiendo que 'details' es donde guardas los detalles del error en el UseCase.
                });
            }

            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
