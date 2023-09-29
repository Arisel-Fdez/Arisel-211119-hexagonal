import { HTTP_STATUS_CODES } from '../validation/HttpStatusCode';
import { SelectBookDTO } from '../validation/selectBookDTO';
import { Request, Response } from 'express';
import { SelectBookUseCase } from '../../application/selectBookUseCase';
import { validate } from 'class-validator';

export class SelectBookController {
    constructor(private selectBookUseCase: SelectBookUseCase) {}

    async run(req: Request, res: Response): Promise<Response> {
        const data: SelectBookDTO = new SelectBookDTO(req.body.userId, req.body.bookId);
        const validationErrors = await validate(data);

        if (validationErrors.length > 0) {
            return res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({ errors: validationErrors });
        }

        try {
            const message = await this.selectBookUseCase.run(data);
            return res.status(HTTP_STATUS_CODES.OK).send({ message });
        } catch (error: any) {
            return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({ error: error.message });
        }
    }
}
