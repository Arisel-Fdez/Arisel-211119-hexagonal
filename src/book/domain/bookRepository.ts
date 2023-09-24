import { Book } from "./book";

export interface BookRepository {
    addBook(title: string, author: string, code: number, status: string, in_use: boolean): Promise<Book | null>;

    listAllBooks(): Promise<Book[]>; // Devuelve una lista de libros

    listInactiveBooks(): Promise<Book[]>; // Devuelve una lista de libros inactivos

    // Puedes agregar otros métodos aquí conforme los necesites
}