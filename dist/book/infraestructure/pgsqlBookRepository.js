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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PgsqlBookRepository = void 0;
const book_1 = require("../domain/book");
const BookModel_1 = __importDefault(require("./models/BookModel"));
class PgsqlBookRepository {
    addBook(title) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdBook = yield BookModel_1.default.create({ title });
                return new book_1.Book(createdBook.id, createdBook.title);
            }
            catch (error) {
                console.error("Error adding book:", error);
                return null;
            }
        });
    }
}
exports.PgsqlBookRepository = PgsqlBookRepository;
