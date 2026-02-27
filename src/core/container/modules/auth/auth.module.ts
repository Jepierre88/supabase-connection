import { asFunction } from "awilix";
import type { SupabaseClient } from "@supabase/supabase-js";

import { AuthAdapter } from "@/infrastructure/adapters/auth/auth.adapter";
import { LoginUseCase } from "@/domain/usecases/auth/login.usecase";
import { SignUpUseCase } from "@/domain/usecases/auth/sign-up.usecase";
import { LogoutUseCase } from "@/domain/usecases/auth/logout.usecase";
import { ForgotPasswordUseCase } from "@/domain/usecases/auth/forgot-password.usecase";
import { UpdatePasswordUseCase } from "@/domain/usecases/auth/update-password.usecase";
import { GetUserUseCase } from "@/domain/usecases/auth/get-user.usecase";
import { VerifyOtpUseCase } from "@/domain/usecases/auth/verify-otp.usecase";
import { DIContainerCradle } from "../../container.types";

export function createAuthModule(supabaseClient: SupabaseClient) {
  return {
    authAdapter: asFunction(
      () => new AuthAdapter(supabaseClient)
    ).singleton(),

    loginUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new LoginUseCase(authAdapter)
    ).singleton(),

    signUpUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new SignUpUseCase(authAdapter)
    ).singleton(),

    logoutUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new LogoutUseCase(authAdapter)
    ).singleton(),

    forgotPasswordUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new ForgotPasswordUseCase(authAdapter)
    ).singleton(),

    updatePasswordUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new UpdatePasswordUseCase(authAdapter)
    ).singleton(),

    getUserUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new GetUserUseCase(authAdapter)
    ).singleton(),

    verifyOtpUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) =>
        new VerifyOtpUseCase(authAdapter)
    ).singleton(),
  };
}
