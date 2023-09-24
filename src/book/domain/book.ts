export class Book {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly author: string,
        readonly code: number,
        readonly status: string,
        readonly in_use: boolean
    ) { }
}
