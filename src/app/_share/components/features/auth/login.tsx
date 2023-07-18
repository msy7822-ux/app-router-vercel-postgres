"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginComponent() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      signIn("github");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      className="rounded-md border px-4 py-3"
      onClick={handleLogin}
    >
      <>ログイン</>
    </button>
  );
}
