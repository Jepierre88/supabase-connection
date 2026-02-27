import type { AuthProvider } from "@/domain/entities/auth/auth-provider.entity";
import type { AuthStrategyPort } from "@/domain/ports/auth/auth-strategy.port";
import { AuthStrategyFactoryPort } from "@/domain/ports/auth/auth-strategy-factory.port";

export class AuthStrategyFactory implements AuthStrategyFactoryPort {
  private readonly strategies: Map<AuthProvider, AuthStrategyPort>;

  constructor(strategies: Map<AuthProvider, AuthStrategyPort>) {
    this.strategies = strategies;
  }

  getStrategy(provider: AuthProvider): AuthStrategyPort {
    const strategy = this.strategies.get(provider);
    if (!strategy) {
      throw new Error(`Auth strategy not found for provider: ${provider}`);
    }
    return strategy;
  }
}
