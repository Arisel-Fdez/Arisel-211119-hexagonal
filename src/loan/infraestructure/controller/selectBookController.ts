import { Request, Response } from 'express';
import { SelectBookUseCase } from '../../application/selectBookUseCase';

export class SelectBookController {

  constructor(private selectBookUseCase: SelectBookUseCase) {}

  async run(req: Request, res: Response): Promise<Response> {
    const { userId, bookId } = req.body;
    try {
      const message = await this.selectBookUseCase.run(userId, bookId);
      return res.status(200).send({ message });
    } catch (error: any) {
      return res.status(500).send({ error: error.message });
    }
  }
}