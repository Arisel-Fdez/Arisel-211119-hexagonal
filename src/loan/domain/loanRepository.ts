import LoanModel from "../infraestructure/models/loanModel";
import { Loan } from "./loan";

export interface LoanRepository {
  findLoanByUserId(userId: number): Promise<LoanModel | null>;
  findByUserIdAndBookId(userId: number, bookId: number): Promise<Loan | null>;
  findActiveLoanByUserId(userId: number): Promise<Loan | null>;
  save(loan: Loan): Promise<void>;
  update(loan: Loan): Promise<void>;

}

  