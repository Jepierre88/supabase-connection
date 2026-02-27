import type { AuthPort } from "../../ports/auth/auth.port";

export class VerifyOtpUseCase {
  private readonly authPort: AuthPort;

  constructor(authPort: AuthPort) {
    this.authPort = authPort;
  }

  async execute(tokenHash: string, type: string) {
    return this.authPort.verifyOtp(tokenHash, type);
  }
}
