import { Loan } from '../domain/loan';
import { LoanRepository } from '../domain/loanRepository';
import BookModel from '../../book/infraestructure/models/BookModel'; 

export class ReturnBookUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async run(userId: number, bookId: number): Promise<string> {
    const loanToReturn = await this.loanRepository.findByUserIdAndBookId(userId, bookId);

    if (!loanToReturn || loanToReturn.returnDate) {
      return 'User does not have this book borrowed or it has already been returned.';
    }

    // Actualizar el Loan para marcar el libro como devuelto
    loanToReturn.returnDate = new Date();
    await this.loanRepository.save(loanToReturn);

    // Cambiar el estado del libro a 'activo' nuevamente
    const bookToReturn = await BookModel.findByPk(bookId);
    if (!bookToReturn) {
      throw new Error('Book not found');
    }

    bookToReturn.status = 'activo';
    await bookToReturn.save();

    return 'Book returned successfully';
  }
}
