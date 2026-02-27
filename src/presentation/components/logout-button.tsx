"use client";

import { createBrowserSupabaseClient } from "@/infrastructure/datasources/supabase/supabase-browser-client";
import { Button } from "@/presentation/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}
