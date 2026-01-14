"use client";

import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/logout", { method: "POST" });
    router.refresh();      // re-render server components
    router.push("/login"); // send user back to login
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
