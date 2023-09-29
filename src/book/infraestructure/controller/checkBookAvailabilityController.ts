import { Request, Response } from "express";
import { CheckBookAvailabilityUseCase } from "../../application/checkBookAvailabilityUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';
import { CheckBookAvailabilityDTO } from "../validation/hheckBookAvailabilityDTO";

export class CheckBookAvailabilityController {
    constructor(readonly checkBookAvailabilityUseCase: CheckBookAvailabilityUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const bookDto = new CheckBookAvailabilityDTO(id);

            const availability = await this.checkBookAvailabilityUseCase.run(bookDto);
            return res.status(HTTP_STATUS_CODES.OK).send({ status: "success", availability });
        } catch (error: any) {
            console.error("Error in CheckBookAvailabilityController:", error.message);

            if (error.message == HTTP_STATUS_CODES.BAD_REQUEST.toString()) {
                return res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                    status: "error",
                    message: "Error en la validación",
                    validations: error.details
                });
            }

            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
                status: "error",
                message: "Error interno del servidor"
            });
        }
    }
}
