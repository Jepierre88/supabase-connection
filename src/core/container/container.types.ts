// Domain
import type { SignInUseCase } from "@/domain/usecases/auth/sign-in.usecase";
import type { SignUpUseCase } from "@/domain/usecases/auth/sign-up.usecase";
import type { LogoutUseCase } from "@/domain/usecases/auth/logout.usecase";
import type { ForgotPasswordUseCase } from "@/domain/usecases/auth/forgot-password.usecase";
import type { UpdatePasswordUseCase } from "@/domain/usecases/auth/update-password.usecase";
import type { GetUserUseCase } from "@/domain/usecases/auth/get-user.usecase";
import type { VerifyOtpUseCase } from "@/domain/usecases/auth/verify-otp.usecase";

// Infrastructure
import type { AuthAdapter } from "@/infrastructure/adapters/auth/auth.adapter";
import type { AuthDatasource } from "@/infrastructure/datasources/auth/auth.datasource";
import type { AuthStrategyFactory } from "@/infrastructure/datasources/auth/auth-strategy.factory";
import type { PasswordAuthDatasource } from "@/infrastructure/datasources/auth/strategies/password-auth.datasource";
import type { GoogleAuthDatasource } from "@/infrastructure/datasources/auth/strategies/google-auth.datasource";
import type { GithubAuthDatasource } from "@/infrastructure/datasources/auth/strategies/github-auth.datasource";

export interface DIContainerCradle {
  // Datasources
  authDatasource: AuthDatasource;
  passwordAuthDatasource: PasswordAuthDatasource;
  googleAuthDatasource: GoogleAuthDatasource;
  githubAuthDatasource: GithubAuthDatasource;

  // Factory
  authStrategyFactory: AuthStrategyFactory;

  // Adapter
  authAdapter: AuthAdapter;

  // Use Cases
  signInUseCase: SignInUseCase;
  signUpUseCase: SignUpUseCase;
  logoutUseCase: LogoutUseCase;
  forgotPasswordUseCase: ForgotPasswordUseCase;
  updatePasswordUseCase: UpdatePasswordUseCase;
  getUserUseCase: GetUserUseCase;
  verifyOtpUseCase: VerifyOtpUseCase;
}
