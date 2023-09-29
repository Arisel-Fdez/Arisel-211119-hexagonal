import { PgsqlPaymentRepository } from "./pgsqlPaymentRepository";

import { ProcessPaymentUseCase } from "../application/processPaymentUseCase";
import { ProcessPaymentController } from "./controller/processPaymentController";
import { PgsqlLoanRepository } from "../../loan/infraestructure/pgsqlLoanRepository";

export const pgsqlPaymentRepository = new PgsqlPaymentRepository();
export const pgsqlLoanRepository = new PgsqlLoanRepository();

export const processPaymentUseCase = new ProcessPaymentUseCase(pgsqlPaymentRepository , pgsqlLoanRepository);
export const processPaymentController = new ProcessPaymentController(processPaymentUseCase);
