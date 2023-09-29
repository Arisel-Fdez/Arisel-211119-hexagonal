import express from 'express';
import { authController, logoutController } from './dependencies';



const authRouter = express.Router();

authRouter.post('/login', authController.run.bind(authController));
authRouter.post('/logout', logoutController.run.bind(logoutController));


export { authRouter };