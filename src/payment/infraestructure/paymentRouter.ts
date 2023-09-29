import express from "express";
import { processPaymentController } from "./dependencies";

export const paymentRouter = express.Router();

paymentRouter.post('/payment', processPaymentController.run.bind(processPaymentController));
