import { PaymentRepository } from "../domain/paymentRepository";
import PaymentModel from '../infraestructure/models/paymentModel';  

export class PgsqlPaymentRepository implements PaymentRepository {
    async processPayment(loanId: number, amount: number, paymentMethod: string): Promise<void> {
        const payment = await PaymentModel.create({
            loanId,
            amount,
            paymentMethod,
            paymentDate: new Date() 
        });

        if (!payment) {
            throw new Error("Error al procesar el pago");
        }

        // Otras lógicas adicionales...
    }

    processPaymentForLoan(loanId: number, amount: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
