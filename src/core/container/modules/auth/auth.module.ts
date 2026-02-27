import { asFunction } from "awilix";
import type { SupabaseClient } from "@supabase/supabase-js";

import { AuthDatasource } from "@/infrastructure/datasources/auth/auth.datasource";
import { AuthStrategyFactory } from "@/infrastructure/datasources/auth/auth-strategy.factory";
import { PasswordAuthDatasource } from "@/infrastructure/datasources/auth/strategies/password-auth.datasource";
import { GoogleAuthDatasource } from "@/infrastructure/datasources/auth/strategies/google-auth.datasource";
import { GithubAuthDatasource } from "@/infrastructure/datasources/auth/strategies/github-auth.datasource";
import { AuthAdapter } from "@/infrastructure/adapters/auth/auth.adapter";
import { SignInUseCase } from "@/domain/usecases/auth/sign-in.usecase";
import { SignUpUseCase } from "@/domain/usecases/auth/sign-up.usecase";
import { LogoutUseCase } from "@/domain/usecases/auth/logout.usecase";
import { ForgotPasswordUseCase } from "@/domain/usecases/auth/forgot-password.usecase";
import { UpdatePasswordUseCase } from "@/domain/usecases/auth/update-password.usecase";
import { GetUserUseCase } from "@/domain/usecases/auth/get-user.usecase";
import { VerifyOtpUseCase } from "@/domain/usecases/auth/verify-otp.usecase";
import type { AuthProvider } from "@/domain/entities/auth/auth-provider.entity";
import type { AuthStrategyPort } from "@/domain/ports/auth/auth-strategy.port";
import type { DIContainerCradle } from "../../container.types";

export function createAuthModule(supabaseClient: SupabaseClient) {
  return {
    // Datasources
    authDatasource: asFunction(
      () => new AuthDatasource(supabaseClient)
    ).singleton(),

    passwordAuthDatasource: asFunction(
      () => new PasswordAuthDatasource(supabaseClient)
    ).singleton(),

    googleAuthDatasource: asFunction(
      () => new GoogleAuthDatasource(supabaseClient)
    ).singleton(),

    githubAuthDatasource: asFunction(
      () => new GithubAuthDatasource(supabaseClient)
    ).singleton(),

    // Factory (manages strategy selection)
    authStrategyFactory: asFunction(
      ({
        passwordAuthDatasource,
        googleAuthDatasource,
        githubAuthDatasource,
      }: DIContainerCradle) => {
        const strategies = new Map<AuthProvider, AuthStrategyPort>([
          ["password", passwordAuthDatasource],
          ["google", googleAuthDatasource],
          ["github", githubAuthDatasource],
        ]);
        return new AuthStrategyFactory(strategies);
      }
    ).singleton(),

    // Adapter (delegates to factory + datasource)
    authAdapter: asFunction(
      ({ authStrategyFactory, authDatasource }: DIContainerCradle) =>
        new AuthAdapter(authStrategyFactory, authDatasource)
    ).singleton(),

    // Use Cases
    signInUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) => new SignInUseCase(authAdapter)
    ).singleton(),

    signUpUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) => new SignUpUseCase(authAdapter)
    ).singleton(),

    logoutUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) => new LogoutUseCase(authAdapter)
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
      ({ authAdapter }: DIContainerCradle) => new GetUserUseCase(authAdapter)
    ).singleton(),

    verifyOtpUseCase: asFunction(
      ({ authAdapter }: DIContainerCradle) => new VerifyOtpUseCase(authAdapter)
    ).singleton(),
  };
}
