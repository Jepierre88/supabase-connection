import type { SupabaseClient } from "@supabase/supabase-js";
import type { AuthResult } from "@/domain/entities/auth/auth-result.entity";
import type { SignInParams } from "@/domain/entities/auth/sign-in-params.entity";
import type { SignUpParams } from "@/domain/entities/auth/sign-up-params.entity";
import type { AuthStrategyPort } from "@/domain/ports/auth/auth-strategy.port";

export class PasswordAuthDatasource implements AuthStrategyPort {
  private readonly client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this.client = client;
  }

  async signIn(params: SignInParams): Promise<AuthResult> {
    const { error } = await this.client.auth.signInWithPassword({
      email: params.email!,
      password: params.password!,
    });
    return { success: !error, error: error?.message };
  }

  async signUp(params: SignUpParams): Promise<AuthResult> {
    const { error } = await this.client.auth.signUp({
      email: params.email!,
      password: params.password!,
      options: params.redirectTo
        ? { emailRedirectTo: params.redirectTo }
        : undefined,
    });
    return { success: !error, error: error?.message };
  }
}
