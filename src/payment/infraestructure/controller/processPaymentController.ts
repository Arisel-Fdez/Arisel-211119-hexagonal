import { Request, Response } from "express";
import { ProcessPaymentUseCase } from "../../application/processPaymentUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode'; 

export class ProcessPaymentController {
    constructor(private processPaymentUseCase: ProcessPaymentUseCase) {}

    async run(req: Request, res: Response) {
        const { userId, amount, paymentMethod } = req.body;

        try {
            const message = await this.processPaymentUseCase.run(userId, amount, paymentMethod);
            res.status(HTTP_STATUS_CODES.OK).send({
                status: "success",
                message
            });
        } catch (error: any) {
            console.error("Error in ProcessPaymentController:", error);
            res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({
                status: "error",
                message: error.message
            });
        }
    }
}
