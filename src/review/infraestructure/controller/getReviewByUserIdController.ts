import { Request, Response } from "express";
import { GetReviewByUserIdUseCase } from "../../application/getReviewByUserIdUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class GetReviewByUserIdController {
    constructor(private getReviewByUserIdUseCase: GetReviewByUserIdUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const review = await this.getReviewByUserIdUseCase.execute(Number(req.params.userId));
            
            if (review) {
                res.status(HTTP_STATUS_CODES.OK).send(review);
            } else {
                res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ message: "Review not found for provided user ID" });
            }
        } catch (error) {
            console.error("Error in GetReviewByUserIdController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
        }
    }
}