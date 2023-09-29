import { PgsqlAuthRepository } from "./pgsqlAuthRepository";

import { AuthUseCase } from "../application/authUseCase";
import { AuthController } from "./controller/authController";

import { LogoutUseCase } from "../application/logoutUseCase";
import { LogoutController } from "./controller/logoutController";

export const pgsqlAuthRepository = new PgsqlAuthRepository();

export const authUseCase = new AuthUseCase(pgsqlAuthRepository);
export const authController = new AuthController(authUseCase);

export const logoutUseCase = new LogoutUseCase(pgsqlAuthRepository);
export const logoutController = new LogoutController(logoutUseCase);
