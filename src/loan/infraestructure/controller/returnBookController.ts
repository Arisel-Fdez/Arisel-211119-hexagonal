import { Request, Response } from 'express';
import { ReturnBookUseCase } from '../../application/returnBookUseCase';

export class ReturnBookController {
    private returnBookUseCase: ReturnBookUseCase;

    constructor(returnBookUseCase: ReturnBookUseCase) {
        this.returnBookUseCase = returnBookUseCase;
    }

    handle = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { userId, bookId } = req.body;

            const result = await this.returnBookUseCase.run(userId, bookId);
            return res.status(200).json({ message: result });

        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    };
}
