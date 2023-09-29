import { Loan } from '../domain/loan';
import { LoanRepository } from '../domain/loanRepository';
import LoanModel from "./models/loanModel";

export class PgsqlLoanRepository implements LoanRepository {

    
    async findByUserIdAndBookId(userId: number, bookId: number): Promise<Loan | null> {
        const foundLoan = await LoanModel.findOne({
            where: {
                userId,
                bookId
            }
        });
        if (foundLoan) {
            return new Loan(foundLoan.id, foundLoan.userId, foundLoan.bookId, foundLoan.loanDate, foundLoan.returnDate);
        }
        return null;
    }
    

    async save(loan: Loan): Promise<void> {
        const loanModel = await LoanModel.findByPk(loan.id);
        if (!loanModel) {
          throw new Error('Loan not found');
        }
        loanModel.returnDate = loan.returnDate;
        await loanModel.save();
    }
    


    async findActiveLoanByUserId(userId: number): Promise<Loan | null> {
        const foundLoan = await LoanModel.findOne({
            where: {
                userId,
                returnDate: null
            }
        });
        if (foundLoan) {
            return new Loan(foundLoan.id, foundLoan.userId, foundLoan.bookId, foundLoan.loanDate, foundLoan.returnDate);
        }
        return null;
    }

    async update(loan: Loan): Promise<void> {
        const loanInDb = await LoanModel.findByPk(loan.id);
        if (!loanInDb) {
            throw new Error('Loan not found');
        }

        loanInDb.returnDate = loan.returnDate;
        await loanInDb.save();
    }

    async findLoanByUserId(userId: number): Promise<LoanModel | null> {
        return await LoanModel.findOne({ where: { userId } });
    }

}
