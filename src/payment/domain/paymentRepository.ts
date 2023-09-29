export interface PaymentRepository {
    processPayment(id: any, amount: number, paymentMethod: string): unknown;
    processPaymentForLoan(loanId: number, amount: number): Promise<boolean>;
}
