"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInactiveBooksController = void 0;
class ListInactiveBooksController {
    constructor(listInactiveBooksUseCase) {
        this.listInactiveBooksUseCase = listInactiveBooksUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let books = yield this.listInactiveBooksUseCase.run();
                res.status(200).send({
                    status: "success",
                    data: books,
                    message: "Listado de libros inactivos recuperado exitosamente"
                });
            }
            catch (error) {
                console.error("Error in ListInactiveBooksController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Error interno del servidor"
                });
            }
        });
    }
}
exports.ListInactiveBooksController = ListInactiveBooksController;
