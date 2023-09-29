import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";
import { LoanRepository } from '../../loan/domain/loanRepository';
import { AddReviewDTO } from '../infraestructure/validation/addReviewDTO';

export class AddReviewUseCase {
    constructor(
      private reviewRepository: ReviewRepository,
      private loanRepository: LoanRepository
    ) {}

    async run(addReviewDTO: AddReviewDTO): Promise<Review | null> {
        try {
            const activeLoan = await this.loanRepository.findActiveLoanByUserId(addReviewDTO.userId);
            
            if (!activeLoan || activeLoan.bookId !== addReviewDTO.bookId) {
                throw new Error('User has not borrowed this book.');
            }

            const newReview = await this.reviewRepository.addReview(addReviewDTO.userId, addReviewDTO.bookId, addReviewDTO.msg);
            return newReview;
        } catch (error) {
            console.error("Error in AddReviewUseCase:", error);
            return null;
        }
    }
}
