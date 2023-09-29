export class Payment {
    constructor(
        readonly userId: number,
        readonly bookId: number,
        readonly amount: number,
        readonly date: Date = new Date()
    ) {}
}
