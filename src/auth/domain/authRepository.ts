import { Auth } from "./auth";

export interface AuthRepository {
    verifyUser(email: string, password: string): Promise<Auth | null>;
    setUserStatus(email: string, status: string): Promise<void>;
}
