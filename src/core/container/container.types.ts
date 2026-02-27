// Domain
import type { LoginUseCase } from "@/domain/usecases/auth/login.usecase";
import type { SignUpUseCase } from "@/domain/usecases/auth/sign-up.usecase";
import type { LogoutUseCase } from "@/domain/usecases/auth/logout.usecase";
import type { ForgotPasswordUseCase } from "@/domain/usecases/auth/forgot-password.usecase";
import type { UpdatePasswordUseCase } from "@/domain/usecases/auth/update-password.usecase";
import type { GetUserUseCase } from "@/domain/usecases/auth/get-user.usecase";
import type { VerifyOtpUseCase } from "@/domain/usecases/auth/verify-otp.usecase";

// Infrastructure
import type { AuthAdapter } from "@/infrastructure/adapters/auth/auth.adapter";

export interface DIContainerCradle {
  // Auth
  authAdapter: AuthAdapter;
  loginUseCase: LoginUseCase;
  signUpUseCase: SignUpUseCase;
  logoutUseCase: LogoutUseCase;
  forgotPasswordUseCase: ForgotPasswordUseCase;
  updatePasswordUseCase: UpdatePasswordUseCase;
  getUserUseCase: GetUserUseCase;
  verifyOtpUseCase: VerifyOtpUseCase;
}
