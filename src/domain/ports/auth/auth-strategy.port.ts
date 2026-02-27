import type { AuthResult } from "../../entities/auth/auth-result.entity";
import type { SignInParams } from "../../entities/auth/sign-in-params.entity";
import type { SignUpParams } from "../../entities/auth/sign-up-params.entity";

export abstract class AuthStrategyPort {
  abstract signIn(params: SignInParams): Promise<AuthResult>;
  abstract signUp(params: SignUpParams): Promise<AuthResult>;
}
