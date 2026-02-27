import type { AuthPort } from "../../ports/auth/auth.port";

export class LoginUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(email: string, password: string) {
    return this.authPort.signInWithPassword(email, password);
  }
}
