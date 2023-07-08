import { getServerSession } from "next-auth";
import { LogoutComponent } from "./_share/components/features/auth/logout";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="">
      <div>main page</div>
      {!!session && <LogoutComponent />}
    </main>
  );
}
