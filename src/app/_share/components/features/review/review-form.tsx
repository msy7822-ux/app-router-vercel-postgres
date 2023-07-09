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
    // await createReview(user.id, );
  };

  return (
    <form
      className="
        w-full rounded-md border
        border-accent-0 p-4 shadow  md:p-6
      "
      onSubmit={handleSubmit}
    >
      <h2>レビューする</h2>
      <div>
        <ReviewStars></ReviewStars>
      </div>
      <div className="w-full">
        <ReviewTextarea></ReviewTextarea>
      </div>

      <button type="submit" className="rounded-md border px-3 py-2">
        送信する
      </button>
    </form>
  );
}
