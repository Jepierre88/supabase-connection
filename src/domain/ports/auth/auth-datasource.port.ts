import type { AuthResult } from "../../entities/auth/auth-result.entity";
import type { UserClaims } from "../../entities/auth/user-claims.entity";

export abstract class AuthDatasourcePort {
  abstract signOut(): Promise<AuthResult>;

  abstract resetPasswordForEmail(
    email: string,
    redirectTo?: string
  ): Promise<AuthResult>;

  abstract updatePassword(password: string): Promise<AuthResult>;

  abstract getUser(): Promise<UserClaims | null>;

  abstract verifyOtp(tokenHash: string, type: string): Promise<AuthResult>;
}
