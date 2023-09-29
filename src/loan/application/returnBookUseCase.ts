import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { ReturnBookDTO } from '../infraestructure/validation/returnBookDTO';
import { Loan } from '../domain/loan';
import { LoanRepository } from '../domain/loanRepository';
import BookModel from '../../book/infraestructure/models/BookModel'; 

export class ReturnBookUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async run(data: ReturnBookDTO): Promise<string> {
    const loanToReturn = await this.loanRepository.findByUserIdAndBookId(data.userId, data.bookId);

    if (!loanToReturn || loanToReturn.returnDate) {
      throw new Error('User does not have this book borrowed or it has already been returned.');
    }

    loanToReturn.returnDate = new Date();
    await this.loanRepository.save(loanToReturn);

    const bookToReturn = await BookModel.findByPk(data.bookId);
    if (!bookToReturn) {
      throw new Error('Book not found');
    }

    bookToReturn.status = 'activo';
    await bookToReturn.save();

    return 'Book returned successfully';
  }
}
