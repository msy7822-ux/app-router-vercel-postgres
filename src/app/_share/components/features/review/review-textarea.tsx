"use client";

type Props = {
  content: string;
  setContent: (content: string) => void;
};

export function ReviewTextarea({ content, setContent }: Props) {
  return (
    <div>
      <textarea
        cols={30}
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="
          w-full rounded-sm
          p-1 text-black
        "
      ></textarea>
    </div>
  );
}
