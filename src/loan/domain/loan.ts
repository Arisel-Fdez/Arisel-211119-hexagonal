export class Loan {
    constructor(
        readonly id: number,
        readonly userId: number,
        readonly bookId: number,
        readonly loanDate: Date,
        public returnDate?: Date | null,
    ){ }
}
