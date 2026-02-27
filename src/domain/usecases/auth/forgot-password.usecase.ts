import type { AuthPort } from "../../ports/auth/auth.port";

export class ForgotPasswordUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(email: string, redirectTo?: string) {
    return this.authPort.resetPasswordForEmail(email, redirectTo);
  }
}
