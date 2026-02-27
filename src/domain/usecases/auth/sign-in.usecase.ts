import type { AuthPort } from "../../ports/auth/auth.port";
import type { AuthProvider } from "../../entities/auth/auth-provider.entity";
import type { SignInParams } from "../../entities/auth/sign-in-params.entity";

export class SignInUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(provider: AuthProvider, params: SignInParams) {
    return this.authPort.signIn(provider, params);
  }
}
