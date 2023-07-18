import { getReviews } from "@/lib/prisma";
import { Fragment } from "react";
import { ReviewsListItem } from "./reviews-list-item";

export async function ReviewsList() {
  const reviews = await getReviews();
  console.log(reviews);

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        {reviews.map((review) => {
          return (
            <Fragment key={review.id}>
              <ReviewsListItem review={review}></ReviewsListItem>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
