import { Request, Response } from "express";
import { AddReviewUseCase } from "../../application/addReviewUseCase";
import { AddReviewDTO } from '../validation/addReviewDTO';
import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';

export class AddReviewController {
    constructor(private addReviewUseCase: AddReviewUseCase) {}

    async run(req: Request, res: Response): Promise<void> {
        const addReviewDTO: AddReviewDTO = {
            userId: req.body.userId,
            bookId: req.body.bookId,
            msg: req.body.msg
        };

        try {
            const newReview = await this.addReviewUseCase.run(addReviewDTO);
        
            if (newReview) {
                res.status(HTTP_STATUS_CODES.CREATED).send(newReview);
            } else {
                res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({ message: "Error creating review. Make sure you have borrowed the book." });
            }
        } catch (error) {
            console.error("Error in AddReviewController:", error);
            res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
        }
    }
}
