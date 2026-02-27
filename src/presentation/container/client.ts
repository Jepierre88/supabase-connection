import type { AwilixContainer } from "awilix";
import type { DIContainerCradle } from "@/core/container/container.types";
import { buildDIContainer } from "@/core/container/container";
import { createBrowserSupabaseClient } from "@/infrastructure/datasources/supabase/supabase-browser-client";

let _clientContainer: AwilixContainer<DIContainerCradle> | null = null;

/**
 * Returns a singleton DI container for client components (browser).
 * The Supabase browser client is created once and reused.
 */
export function createClientContainer(): AwilixContainer<DIContainerCradle> {
  if (!_clientContainer) {
    const client = createBrowserSupabaseClient();
    _clientContainer = buildDIContainer(client);
  }
  return _clientContainer;
}
