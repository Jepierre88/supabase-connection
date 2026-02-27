import "server-only";

import type { AwilixContainer } from "awilix";
import type { DIContainerCradle } from "@/core/container/container.types";
import { buildDIContainer } from "@/core/container/container";
import { createServerSupabaseClient } from "@/infrastructure/datasources/supabase/supabase-server-client";

/**
 * Creates a new DI container for each server request.
 * Must be called inside Server Components, Route Handlers, or Server Actions.
 *
 * **Never cache this container globally** — each request needs fresh cookies.
 */
export async function createServerContainer(): Promise<
  AwilixContainer<DIContainerCradle>
> {
  const client = await createServerSupabaseClient();
  return buildDIContainer(client);
}
