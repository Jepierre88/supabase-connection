"use client";

import { useContainer } from "@/presentation/contexts/container.context";
import type { SignInUseCase } from "@/domain/usecases/auth/sign-in.usecase";
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
 * const { signInUseCase } = useAuthUseCases();
 * await signInUseCase.execute('password', { email, password });
 * await signInUseCase.execute('google', { redirectTo: '/protected' });
 * ```
 */
export function useAuthUseCases() {
  const container = useContainer();

  return {
    signInUseCase: container.resolve<SignInUseCase>("signInUseCase"),
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
