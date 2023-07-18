import { LogoutComponent } from "@/app/_share/components/features/auth/logout";
import { ReviewsListItem } from "@/app/_share/components/features/review/reviews-list/reviews-list-item";
import { getYourReviews } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { Fragment } from "react";

export default async function UserProfilePage() {
  const session = await getServerSession();
  console.log(session?.user?.email);
  const reviews = await getYourReviews(session?.user?.email ?? "");
  console.log(reviews);

  return (
    <div>
      <div className="mb-4">{!!session && <LogoutComponent />}</div>
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <h2>あなたが書いたレビュー</h2>
          {reviews.map((review) => {
            return (
              <Fragment key={review.id}>
                <ReviewsListItem review={review} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
