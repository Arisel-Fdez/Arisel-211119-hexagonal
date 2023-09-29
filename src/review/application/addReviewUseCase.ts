import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";
import { LoanRepository } from '../../loan/domain/loanRepository';

export class AddReviewUseCase {
    constructor(
      private reviewRepository: ReviewRepository,
      private loanRepository: LoanRepository
    ) {}

    async run(userId: number, bookId: number, msg: string): Promise<Review | null> {
        try {
            const activeLoan = await this.loanRepository.findActiveLoanByUserId(userId);
            
            // Si no existe un préstamo activo, o el préstamo activo no corresponde al libro en cuestión, rechaza la revisión.
            if (!activeLoan || activeLoan.bookId !== bookId) {
                throw new Error('User has not borrowed this book.');
            }

            const newReview = await this.reviewRepository.addReview(userId, bookId, msg);
            return newReview;
        } catch (error) {
            console.error("Error in AddReviewUseCase:", error);
            return null;
        }
    }
}
