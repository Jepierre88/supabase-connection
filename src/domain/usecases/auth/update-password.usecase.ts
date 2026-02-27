import type { AuthPort } from "../../ports/auth/auth.port";

export class UpdatePasswordUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(password: string) {
    return this.authPort.updatePassword(password);
  }
}
