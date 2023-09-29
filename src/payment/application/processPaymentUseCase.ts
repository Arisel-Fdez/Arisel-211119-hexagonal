import { PaymentRepository } from "../domain/paymentRepository";
import { LoanRepository } from "../../loan/domain/loanRepository";

export class ProcessPaymentUseCase {
    constructor(
        private paymentRepository: PaymentRepository,
        private loanRepository: LoanRepository
    ) {}

    async run(userId: number, amount: number, paymentMethod: string): Promise<string> {
        const loan = await this.loanRepository.findLoanByUserId(userId);
        
        if (!loan) {
            throw new Error("El usuario no ha prestado ningún libro.");
        }

        await this.paymentRepository.processPayment(loan.id, amount, paymentMethod);
        return "Pago procesado con éxito.";
    }
}
