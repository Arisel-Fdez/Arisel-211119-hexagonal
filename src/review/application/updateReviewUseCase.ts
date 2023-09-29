import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";
import { UpdateReviewDTO } from '../infraestructure/validation/updateReviewDTO';

export class UpdateReviewUseCase {
    constructor(readonly reviewRepository: ReviewRepository) {}

    async run(updateReviewDTO: UpdateReviewDTO): Promise<Review | null> {
        const reviewToUpdate = new Review(updateReviewDTO.id, updateReviewDTO.userId, updateReviewDTO.bookId, updateReviewDTO.msg);
        return this.reviewRepository.updateReview(reviewToUpdate);
    }
}
