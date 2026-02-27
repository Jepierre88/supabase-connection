"use client";

import { useAuthUseCases } from "@/presentation/hooks/use-auth";
import { Button } from "@/presentation/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  const { logoutUseCase } = useAuthUseCases();

  const logout = async () => {
    await logoutUseCase.execute();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}
