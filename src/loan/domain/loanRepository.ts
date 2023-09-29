import { Loan } from "./loan";

export interface LoanRepository {
  findByUserIdAndBookId(userId: number, bookId: number): Promise<Loan | null>;
  findActiveLoanByUserId(userId: number): Promise<Loan | null>;
  save(loan: Loan): Promise<void>;
  update(loan: Loan): Promise<void>;

}

  