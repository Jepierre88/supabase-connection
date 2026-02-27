"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { AwilixContainer } from "awilix";
import type { DIContainerCradle } from "@/core/container/container.types";
import { createClientContainer } from "@/presentation/container/client";

const ContainerContext = createContext<AwilixContainer<DIContainerCradle> | null>(null);

/**
 * Provides the Awilix DI container to the React component tree.
 * Wrap your layout or app with this provider so client components
 * can resolve use cases via `useContainer()`.
 */
export function ContainerProvider({ children }: { children: ReactNode }) {
  const [container] = useState(() => createClientContainer());

  return (
    <ContainerContext.Provider value={container}>
      {children}
    </ContainerContext.Provider>
  );
}

/**
 * Hook to access the Awilix DI container from client components.
 *
 * @example
 * ```tsx
 * const container = useContainer();
 * const loginUseCase = container.resolve("loginUseCase");
 * ```
 */
export function useContainer(): AwilixContainer<DIContainerCradle> {
  const container = useContext(ContainerContext);
  if (!container) {
    throw new Error(
      "useContainer must be used within a <ContainerProvider />"
    );
  }
  return container;
}
