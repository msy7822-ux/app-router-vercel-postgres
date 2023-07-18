import Link from "next/link";
import { ReviewsList } from "./_share/components/features/review/reviews-list/reviews-list";

export default async function Home() {
  return (
    <main
      className="
        flex w-full flex-col
        items-start gap-8 px-0
        md:px-3
      "
    >
      <div className="block w-full items-start justify-between md:flex">
        <div className="mb-8 w-full md:hidden">
          <Link
            href="/reviews/new"
            className="inline-block w-full rounded-md border p-2 text-center"
          >
            レビューを書く
          </Link>
        </div>
        <div className="w-full md:max-w-[500px]">
          <h2 className="mb-5 text-lg">みんなのレビュー</h2>
          <ReviewsList></ReviewsList>
        </div>
        <Link
          href="/reviews/new"
          className="hidden rounded-md border p-3 md:inline-block"
        >
          レビューを書く
        </Link>
      </div>
    </main>
  );
}
