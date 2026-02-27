"use client";

import { useContainer } from "@/presentation/contexts/container.context";
import type { LoginUseCase } from "@/domain/usecases/auth/login.usecase";
import type { SignUpUseCase } from "@/domain/usecases/auth/sign-up.usecase";
import type { LogoutUseCase } from "@/domain/usecases/auth/logout.usecase";
import type { ForgotPasswordUseCase } from "@/domain/usecases/auth/forgot-password.usecase";
import type { UpdatePasswordUseCase } from "@/domain/usecases/auth/update-password.usecase";

/**
 * Convenience hook that resolves all auth-related use cases
 * from the DI container.
 *
 * @example
 * ```tsx
 * const { loginUseCase } = useAuthUseCases();
 * await loginUseCase.execute(email, password);
 * ```
 */
export function useAuthUseCases() {
  const container = useContainer();

  return {
    loginUseCase: container.resolve<LoginUseCase>("loginUseCase"),
    signUpUseCase: container.resolve<SignUpUseCase>("signUpUseCase"),
    logoutUseCase: container.resolve<LogoutUseCase>("logoutUseCase"),
    forgotPasswordUseCase: container.resolve<ForgotPasswordUseCase>(
      "forgotPasswordUseCase"
    ),
    updatePasswordUseCase: container.resolve<UpdatePasswordUseCase>(
      "updatePasswordUseCase"
    ),
  };
}
