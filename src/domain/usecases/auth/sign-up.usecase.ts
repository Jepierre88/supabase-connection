import type { AuthPort } from "../../ports/auth/auth.port";

export class SignUpUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(email: string, password: string, redirectTo?: string) {
    return this.authPort.signUp(email, password, redirectTo);
  }
}
