import { Request, Response } from "express";
import { ListAllReviewsUseCase } from "../../application/listAllReviewsUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class ListAllReviewsController {
    constructor(private listAllReviewsUseCase: ListAllReviewsUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const reviews = await this.listAllReviewsUseCase.execute();
            res.status(HTTP_STATUS_CODES.OK).send(reviews);
        } catch (error) {
            console.error("Error in ListAllReviewsController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
        }
    }
}
