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
exports.AuthUseCase = void 0;
const jwt_1 = require("../utils/jwt");
class AuthUseCase {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    run(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authRepository.verifyUser(email, password);
            if (user) {
                // En este punto, ya hemos verificado el email y la contraseña.
                return (0, jwt_1.generateToken)({ email: user.email }); // No necesitas userId aquí a menos que también lo agregues a la clase Auth.
            }
            return null;
        });
    }
}
exports.AuthUseCase = AuthUseCase;
