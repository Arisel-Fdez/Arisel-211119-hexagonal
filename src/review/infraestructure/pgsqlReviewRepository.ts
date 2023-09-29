import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";
import ReviewModel from "./models/reviewModel";

export class PgsqlReviewRepository implements ReviewRepository {

    async addReview(userId: number, bookId: number, msg: string): Promise<Review | null> {
        try {
            const createdReview = await ReviewModel.create({ userId, bookId, msg });
            return new Review(createdReview.id, createdReview.userId, createdReview.bookId, createdReview.msg);
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return null;
        }
    }

    async getAllReviews(): Promise<Review[]> {
        const reviews = await ReviewModel.findAll();
        return reviews.map(review => new Review(review.id, review.userId, review.bookId, review.msg));
    }
    
    async deleteReviewById(id: number): Promise<boolean> {
        try {
            const result = await ReviewModel.destroy({ where: { id } });
            return result > 0; // Retorna true si se eliminó al menos un registro.
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return false;
        }
    }
    
    async getReviewByUserId(userId: number): Promise<Review | null> {
        const review = await ReviewModel.findOne({ where: { userId } });
        if (!review) return null;
        return new Review(review.id, review.userId, review.bookId, review.msg);
    }

    async updateReview(review: Review): Promise<Review | null> {
        try {
            const [updateCount] = await ReviewModel.update(review, { where: { id: review.id } });
            
            if (updateCount > 0) {
                const updatedReviewData = await ReviewModel.findByPk(review.id);
                if (updatedReviewData) {
                    return new Review(
                        updatedReviewData.id,
                        updatedReviewData.userId,
                        updatedReviewData.bookId,
                        updatedReviewData.msg
                    );
                }
            }
            return null;
        } catch (error) {
            console.error("Error in PgsqlReviewRepository:", error);
            return null;
        }
    }
}
