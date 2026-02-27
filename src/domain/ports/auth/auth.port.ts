import type { AuthResult } from "../../entities/auth/auth-result.entity";
import type { UserClaims } from "../../entities/auth/user-claims.entity";

export abstract class AuthPort {
  abstract signInWithPassword(
    email: string,
    password: string
  ): Promise<AuthResult>;

  abstract signUp(
    email: string,
    password: string,
    redirectTo?: string
  ): Promise<AuthResult>;

  abstract signOut(): Promise<AuthResult>;

  abstract resetPasswordForEmail(
    email: string,
    redirectTo?: string
  ): Promise<AuthResult>;

  abstract updatePassword(password: string): Promise<AuthResult>;

  abstract getUser(): Promise<UserClaims | null>;

  abstract verifyOtp(tokenHash: string, type: string): Promise<AuthResult>;
}
