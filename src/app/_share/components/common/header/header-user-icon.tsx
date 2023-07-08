import { FiUserPlus } from "react-icons/fi";

export function HeaderUserIcon() {
  return (
    <div
      className="
        inline-block cursor-pointer rounded-full
        border p-1 align-bottom
      "
    >
      <FiUserPlus size={20}></FiUserPlus>
    </div>
  );
}
