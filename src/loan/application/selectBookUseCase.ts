import { HTTP_STATUS_CODES } from '../infraestructure/validation/HttpStatusCode';
import { SelectBookDTO } from '../infraestructure/validation/selectBookDTO';
import { Loan } from '../domain/loan';
import { LoanRepository } from '../domain/loanRepository';
import BookModel from '../../book/infraestructure/models/BookModel'; 
import LoanModel from '../infraestructure/models/loanModel';

export class SelectBookUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async run(data: SelectBookDTO): Promise<string> {
    const activeLoan = await this.loanRepository.findActiveLoanByUserId(data.userId);
    if (activeLoan) {
      return 'User already has a book borrowed and cannot borrow another one until the current book is returned.';
    }

    const bookToBorrow = await BookModel.findByPk(data.bookId);
    if (!bookToBorrow) {
        throw new Error('Book not found');
    }
    if (bookToBorrow.status === 'inactivo') {
        return 'Book is already borrowed';
    }
    bookToBorrow.status = 'inactivo';
    await bookToBorrow.save();

    const existingLoan = await LoanModel.findOne({
      where: { userId: data.userId, bookId: data.bookId }
    });

    if (existingLoan) {
      existingLoan.returnDate = null;
      await existingLoan.save();
    } else {
      const loanModel = new LoanModel({
          userId: data.userId,
          bookId: data.bookId,
          loanDate: new Date()
      });
      await loanModel.save();
    }

    return 'Book selected successfully';
  }
}
