import { LogoutComponent } from "@/app/_share/components/features/auth/logout";
import { getServerSession } from "next-auth/next";

export default async function UserProfilePage() {
  const session = await getServerSession();

  return (
    <div>
      <div></div>
      {!!session && <LogoutComponent />}
    </div>
  );
}
