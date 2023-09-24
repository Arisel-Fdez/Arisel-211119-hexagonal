import { AddBookUseCase } from "../application/addBookUseCase";
import { PgsqlBookRepository } from "./pgsqlBookRepository";
import { AddBookController } from "./controller/addBookController";
import { ListAllBooksUseCase } from "../application/listAllBooksUseCase";
import { ListAllBooksController } from "./controller/listAllBooksController";
import { ListInactiveBooksUseCase } from "../application/listInactiveBooksUseCase";
import { ListInactiveBooksController } from "./controller/listInactiveBooksController";

export const pgsqlBookRepository = new PgsqlBookRepository();
export const addBookUseCase = new AddBookUseCase(pgsqlBookRepository);
export const addBookController = new AddBookController(addBookUseCase);

export const listAllBooksUseCase = new ListAllBooksUseCase(pgsqlBookRepository); 
export const listAllBooksController = new ListAllBooksController(listAllBooksUseCase);

export const listInactiveBooksUseCase = new ListInactiveBooksUseCase(pgsqlBookRepository);
export const listInactiveBooksController = new ListInactiveBooksController(listInactiveBooksUseCase);