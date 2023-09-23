import { AddBookUseCase } from "../application/addBookUseCase";
import { PgsqlBookRepository } from "./pgsqlBookRepository";
import { AddBookController } from "./controller/addBookController";

export const pgsqlBookRepository = new PgsqlBookRepository();
export const addBookUseCase = new AddBookUseCase(pgsqlBookRepository);
export const addBookController = new AddBookController(addBookUseCase);
