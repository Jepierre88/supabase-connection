import type { AuthProvider } from "../../entities/auth/auth-provider.entity";
import type { AuthStrategyPort } from "./auth-strategy.port";

export abstract class AuthStrategyFactoryPort {
  abstract getStrategy(provider: AuthProvider): AuthStrategyPort;
}
