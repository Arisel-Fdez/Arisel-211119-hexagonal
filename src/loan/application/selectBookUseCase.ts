import { Loan } from '../domain/loan';
import { LoanRepository } from '../domain/loanRepository';
import BookModel from '../../book/infraestructure/models/BookModel'; 
import LoanModel from '../infraestructure/models/loanModel';

export class SelectBookUseCase {
  constructor(private loanRepository: LoanRepository) {}

  async run(userId: number, bookId: number): Promise<string> {
    const activeLoan = await this.loanRepository.findActiveLoanByUserId(userId);
    if (activeLoan) {
      return 'User already has a book borrowed and cannot borrow another one until the current book is returned.';
    }

    const bookToBorrow = await BookModel.findByPk(bookId);
    if (!bookToBorrow) {
        throw new Error('Book not found');
    }
    if (bookToBorrow.status === 'inactivo') {
        return 'Book is already borrowed';
    }
    bookToBorrow.status = 'inactivo';
    await bookToBorrow.save();

    const existingLoan = await LoanModel.findOne({
      where: { userId: userId, bookId: bookId }
    });

    if (existingLoan) {
      // Si ya existe un registro de préstamo para ese libro y ese usuario, simplemente actualiza la returnDate a null
      existingLoan.returnDate = null;
      await existingLoan.save();
    } else {
      // Si no hay registro existente, crea uno nuevo con Sequelize
      const loanModel = new LoanModel({
          userId: userId,
          bookId: bookId,
          loanDate: new Date()
      });
      await loanModel.save();

      // No hay necesidad de crear una instancia 'Loan' y guardarla de nuevo ya que ya hemos guardado la información con Sequelize
    }

    return 'Book selected successfully';
  }
}
