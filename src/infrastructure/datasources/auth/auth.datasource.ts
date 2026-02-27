import type { SupabaseClient } from "@supabase/supabase-js";
import type { AuthResult } from "@/domain/entities/auth/auth-result.entity";
import type { UserClaims } from "@/domain/entities/auth/user-claims.entity";
import { AuthDatasourcePort } from "@/domain/ports/auth/auth-datasource.port";

export class AuthDatasource extends AuthDatasourcePort {
  private readonly client: SupabaseClient;

  constructor(client: SupabaseClient) {
    super();
    this.client = client;
  }

  async signOut(): Promise<AuthResult> {
    const { error } = await this.client.auth.signOut();
    return { success: !error, error: error?.message };
  }

  async resetPasswordForEmail(
    email: string,
    redirectTo?: string
  ): Promise<AuthResult> {
    const { error } = await this.client.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    return { success: !error, error: error?.message };
  }

  async updatePassword(password: string): Promise<AuthResult> {
    const { error } = await this.client.auth.updateUser({ password });
    return { success: !error, error: error?.message };
  }

  async getUser(): Promise<UserClaims | null> {
    const { data } = await this.client.auth.getClaims();
    if (!data?.claims) return null;
    return data.claims as UserClaims;
  }

  async verifyOtp(tokenHash: string, type: string): Promise<AuthResult> {
    const { error } = await this.client.auth.verifyOtp({
      token_hash: tokenHash,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: type as any,
    });
    return { success: !error, error: error?.message };
  }
}
