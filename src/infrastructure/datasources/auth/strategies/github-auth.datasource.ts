import type { SupabaseClient } from "@supabase/supabase-js";
import type { AuthResult } from "@/domain/entities/auth/auth-result.entity";
import type { SignInParams } from "@/domain/entities/auth/sign-in-params.entity";
import type { SignUpParams } from "@/domain/entities/auth/sign-up-params.entity";
import { AuthStrategyPort } from "@/domain/ports/auth/auth-strategy.port";

export class GithubAuthDatasource implements AuthStrategyPort {
  private readonly client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this.client = client;
  }

  async signIn(params: SignInParams): Promise<AuthResult> {
    const { data, error } = await this.client.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: params.redirectTo },
    });
    return { success: !error, error: error?.message, url: data?.url ?? undefined };
  }

  async signUp(params: SignUpParams): Promise<AuthResult> {
    // OAuth providers handle sign-up through the sign-in flow
    return this.signIn(params);
  }
}
