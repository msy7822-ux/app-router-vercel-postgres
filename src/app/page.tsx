import { getSession } from "@/lib/next-auth/server";

export default async function Home() {
  console.log("Home", await getSession());
  return (
    <main className="">
      <div>main page</div>
    </main>
  );
}
