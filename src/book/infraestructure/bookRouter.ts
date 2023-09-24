import express from "express";
import { addBookController, listAllBooksController, listInactiveBooksController } from "./dependencies";

export const bookRouter = express.Router();

// Ruta para agregar un nuevo libro
bookRouter.post(
    "/",
    addBookController.run.bind(addBookController)
);

// Ruta para listar todos los libros
bookRouter.get(
    "/",
    listAllBooksController.run.bind(listAllBooksController)
);

// Ruta para listar todos los libros inactivos
bookRouter.get(
    "/inactives",
    listInactiveBooksController.run.bind(listInactiveBooksController)
);
