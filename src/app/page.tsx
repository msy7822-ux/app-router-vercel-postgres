import { authOptions } from "@/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { ReviewForm } from "./_share/components/features/review/review-form";

export default async function Home() {
  const res = await getServerSession(authOptions);
  console.log("res", res);

  return (
    <main
      className="
        flex w-full flex-col
        items-start gap-8 px-0
        md:px-[50px]
      "
    >
      <ReviewForm></ReviewForm>
    </main>
  );
}
