import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';
import { ReturnBookDTO } from '../validation/returnBookDTO';
import { Request, Response } from 'express';
import { ReturnBookUseCase } from '../../application/returnBookUseCase';
import { validate } from 'class-validator';

export class ReturnBookController {
    private returnBookUseCase: ReturnBookUseCase;

    constructor(returnBookUseCase: ReturnBookUseCase) {
        this.returnBookUseCase = returnBookUseCase;
    }

    handle = async (req: Request, res: Response): Promise<Response> => {
        const data: ReturnBookDTO = new ReturnBookDTO(req.body.userId, req.body.bookId);
        const validationErrors = await validate(data);

        if (validationErrors.length > 0) {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ errors: validationErrors });
        }

        try {
            const result = await this.returnBookUseCase.run(data);
            return res.status(HTTP_STATUS_CODES.OK).json({ message: result });
        } catch (error: any) {
            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    };
}
