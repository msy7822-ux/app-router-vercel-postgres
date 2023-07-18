import { DisplayStarIcon } from "../../../common/star/star-icon";

type Props = {
  review: any;
};

export function ReviewsListItem({ review }: Props) {
  return (
    <div className="w-full rounded-md border p-3">
      <div>{review.author.name} さん</div>
      <DisplayStarIcon count={review.stars}></DisplayStarIcon>
      <div
        className="
          w-full max-w-full overflow-auto
          whitespace-pre-wrap break-words
          md:max-w-[500px]
        "
      >
        {review.review}
      </div>
      <br />
    </div>
  );
}
