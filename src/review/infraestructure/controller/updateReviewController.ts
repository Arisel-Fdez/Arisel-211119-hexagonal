import { Request, Response } from "express";
import { UpdateReviewUseCase } from "../../application/updateReviewUseCase";
import { UpdateReviewDTO } from '../validation/updateReviewDTO';
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class UpdateReviewController {
    constructor(private updateReviewUseCase: UpdateReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const updateReviewDTO: UpdateReviewDTO = {
            id: req.body.id,
            userId: req.body.userId,
            bookId: req.body.bookId,
            msg: req.body.msg
        };
    
        try {
            const updatedReview = await this.updateReviewUseCase.run(updateReviewDTO);
    
            if (updatedReview) {
                res.status(HTTP_STATUS_CODES.OK).send(updatedReview);
            } else {
                res.status(HTTP_STATUS_CODES.NOT_FOUND).send({ message: "Review not found" });
            }
        } catch (error) {
            console.error("Error in UpdateReviewController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
        }
    }
}
