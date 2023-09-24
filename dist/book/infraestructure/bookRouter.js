"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.bookRouter = express_1.default.Router();
// Ruta para agregar un nuevo libro
exports.bookRouter.post("/", dependencies_1.addBookController.run.bind(dependencies_1.addBookController));
// Ruta para listar todos los libros
exports.bookRouter.get("/", dependencies_1.listAllBooksController.run.bind(dependencies_1.listAllBooksController));
// Ruta para listar todos los libros inactivos
exports.bookRouter.get("/inactives", dependencies_1.listInactiveBooksController.run.bind(dependencies_1.listInactiveBooksController));
