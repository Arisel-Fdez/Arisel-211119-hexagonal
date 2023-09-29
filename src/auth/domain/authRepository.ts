import { Auth } from "./auth";

export interface AuthRepository {
    verifyUser(email: string, password: string): Promise<Auth | null>;
    setInactive(email: string): Promise<void>;
}