"use client";

import { createReview } from "@/actions/reviews";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ReviewStars } from "./review-starts";
import { ReviewTextarea } from "./review-textarea";

export function ReviewForm() {
  const { data: session } = useSession();
  const { user } = session || {};
  const router = useRouter();

  // NOTE: useFormStatus動かない...
  const { pending: _isPending } = useFormStatus();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await createReview(rating, comment, user?.email ?? "");

    setIsLoading(false);
    setRating(0);
    setComment("");
    router.push("/");
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
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md border px-3 py-2"
        >
          {!isLoading && "送信する"}
          {isLoading && "送信中..."}
        </button>
      </div>
    </form>
  );
}
