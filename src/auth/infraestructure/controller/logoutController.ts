import { Request, Response } from 'express';
import { LogoutUseCase } from '../../application/logoutUseCase';

export class LogoutController {
    constructor(private logoutUseCase: LogoutUseCase) {}

    async run(req: Request, res: Response) {
        const { email } = req.body;
        await this.logoutUseCase.run(email);
        res.status(200).send({ status: 'success', message: 'Logged out successfully' });
    }
}
