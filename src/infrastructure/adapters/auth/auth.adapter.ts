import type { AuthResult } from "@/domain/entities/auth/auth-result.entity";
import type { UserClaims } from "@/domain/entities/auth/user-claims.entity";
import type { AuthProvider } from "@/domain/entities/auth/auth-provider.entity";
import type { SignInParams } from "@/domain/entities/auth/sign-in-params.entity";
import type { SignUpParams } from "@/domain/entities/auth/sign-up-params.entity";
import type { AuthPort } from "@/domain/ports/auth/auth.port";
import type { AuthStrategyFactoryPort } from "@/domain/ports/auth/auth-strategy-factory.port";
import type { AuthDatasourcePort } from "@/domain/ports/auth/auth-datasource.port";

export class AuthAdapter implements AuthPort {
  private readonly strategyFactory: AuthStrategyFactoryPort;
  private readonly datasource: AuthDatasourcePort;

  constructor(
    strategyFactory: AuthStrategyFactoryPort,
    datasource: AuthDatasourcePort
  ) {
    this.strategyFactory = strategyFactory;
    this.datasource = datasource;
  }

  async signIn(
    provider: AuthProvider,
    params: SignInParams
  ): Promise<AuthResult> {
    return this.strategyFactory.getStrategy(provider).signIn(params);
  }

  async signUp(
    provider: AuthProvider,
    params: SignUpParams
  ): Promise<AuthResult> {
    return this.strategyFactory.getStrategy(provider).signUp(params);
  }

  async signOut(): Promise<AuthResult> {
    return this.datasource.signOut();
  }

  async resetPasswordForEmail(
    email: string,
    redirectTo?: string
  ): Promise<AuthResult> {
    return this.datasource.resetPasswordForEmail(email, redirectTo);
  }

  async updatePassword(password: string): Promise<AuthResult> {
    return this.datasource.updatePassword(password);
  }

  async getUser(): Promise<UserClaims | null> {
    return this.datasource.getUser();
  }

  async verifyOtp(tokenHash: string, type: string): Promise<AuthResult> {
    return this.datasource.verifyOtp(tokenHash, type);
  }
}
