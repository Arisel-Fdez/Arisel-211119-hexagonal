import { Request, Response } from "express";
import { DeleteReviewUseCase } from "../../application/deleteReviewUseCase";
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class DeleteReviewController {
    constructor(private deleteReviewUseCase: DeleteReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            const isDeleted = await this.deleteReviewUseCase.execute(Number(req.params.id));
            
            if (isDeleted) {
                res.status(HTTP_STATUS_CODES.OK).send({ message: "Review successfully deleted" });
            } else {
                res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ message: "Review not found" });
            }
        } catch (error) {
            console.error("Error in DeleteReviewController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
        }
    }
}
