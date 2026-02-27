import {
  createContainer,
  type AwilixContainer,
} from "awilix";
import type { SupabaseClient } from "@supabase/supabase-js";

import { createAuthModule } from "./modules/auth/auth.module";
import type { DIContainerCradle } from "./container.types";

export type { DIContainerCradle } from "./container.types";

export function buildDIContainer(
  supabaseClient: SupabaseClient
): AwilixContainer<DIContainerCradle> {
  const container = createContainer<DIContainerCradle>();

  container.register({
    ...createAuthModule(supabaseClient),
  });

  return container;
}
