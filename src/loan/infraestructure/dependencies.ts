import { PgsqlLoanRepository } from "./pgsqlLoanRepository";

import { SelectBookUseCase } from "../application/selectBookUseCase";
import { SelectBookController } from "./controller/selectBookController";
import { ReturnBookUseCase } from "../application/returnBookUseCase";
import { ReturnBookController } from "./controller/returnBookController";

export const pgsqlLoanRepository = new PgsqlLoanRepository();

export const selectBookUseCase = new SelectBookUseCase(pgsqlLoanRepository);
export const selectBookController = new SelectBookController(selectBookUseCase);


export const returnBookUseCase = new ReturnBookUseCase(pgsqlLoanRepository);
export const returnBookController = new ReturnBookController(returnBookUseCase);
