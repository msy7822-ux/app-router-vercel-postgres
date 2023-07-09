"use client";

import ReactStars from "react-stars";

export function ReviewStars() {
  return (
    <div>
      <ReactStars
        count={5}
        onChange={() => console.log("onChange")}
        size={48}
        color2={"#ffd700"}
      />
    </div>
  );
}
