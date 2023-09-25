"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.usersRouter = express_1.default.Router();
// Ruta para agregar un nuevo usuario
exports.usersRouter.post("/create", dependencies_1.addUsersController.run.bind(dependencies_1.addUsersController));
// Ruta para obtener todos los usuarios
exports.usersRouter.get("/", dependencies_1.listAllUsersController.run.bind(dependencies_1.listAllUsersController));
// Ruta para eliminados usuarios
exports.usersRouter.delete("/delete/:id", dependencies_1.deleteUserController.run.bind(dependencies_1.deleteUserController));
// Ruta para obtener un usuario por su número telefónico
exports.usersRouter.get("/phone/:phone", dependencies_1.getUserByPhoneController.run.bind(dependencies_1.getUserByPhoneController));
