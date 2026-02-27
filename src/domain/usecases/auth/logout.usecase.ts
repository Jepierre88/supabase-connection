import type { AuthPort } from "../../ports/auth/auth.port";

export class LogoutUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute() {
    return this.authPort.signOut();
  }
}
