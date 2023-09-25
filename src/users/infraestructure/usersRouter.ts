import express from "express";
import { addUsersController, getUserByPhoneController, listAllUsersController, deleteUserController  } from "./dependencies";

export const usersRouter = express.Router();

// Ruta para agregar un nuevo usuario
usersRouter.post(
    "/create",
    addUsersController.run.bind(addUsersController)
);

// Ruta para obtener todos los usuarios
usersRouter.get(
    "/",
    listAllUsersController.run.bind(listAllUsersController)
);

// Ruta para eliminados usuarios
usersRouter.delete(
    "/delete/:id",
    deleteUserController.run.bind(deleteUserController)
);

// Ruta para obtener un usuario por su número telefónico
usersRouter.get(
    "/phone/:phone",
    getUserByPhoneController.run.bind(getUserByPhoneController)
);

