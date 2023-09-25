import { Request, Response } from 'express';
import { AuthUseCase } from '../../application/authUseCase';

export class AuthController {
    constructor(private authUseCase: AuthUseCase) {}

    async run(req: Request, res: Response) {
        const { email, password } = req.body;
        const token = await this.authUseCase.run(email, password);
        if (token) {
            res.status(200).send({ status: 'success', token });
        } else {
            res.status(401).send({ status: 'error', message: 'Credenciales inválidas' });
        }
    }
}
