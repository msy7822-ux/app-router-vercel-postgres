"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LogoutComponent() {
  const router = useRouter();
  const handleLogout = () => {
    try {
      signOut();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-md border border-accent-5 px-5 py-2"
    >
      ログアウト
    </button>
  );
}
