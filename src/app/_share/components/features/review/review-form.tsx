"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { ReviewStars } from "./review-starts";
import { ReviewTextarea } from "./review-textarea";

export function ReviewForm() {
  const { data: session } = useSession();
  const { user } = session || {};

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // await createReview(rating, comment, user.id);
  };

  if (!user) return null;

  return (
    <form
      className="
        w-full rounded-md border
        border-accent-0 p-4 shadow md:p-6
      "
      onSubmit={handleSubmit}
    >
      <h2>【本日の発表の感想をください】</h2>
      <div>
        <ReviewStars rating={rating} setRating={setRating}></ReviewStars>
      </div>
      <div className="w-full">
        <ReviewTextarea
          content={comment}
          setContent={setComment}
        ></ReviewTextarea>
      </div>

      <div className="flex w-full justify-end">
        <button type="submit" className="rounded-md border px-3 py-2">
          送信する
        </button>
      </div>
    </form>
  );
}
