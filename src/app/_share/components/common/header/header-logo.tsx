import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";

export function HeaderLogo() {
  return (
    <Link href={"/"}>
      <div className="flex gap-2">
        <IoLogoVercel size={25}></IoLogoVercel>
        <span className="text-lg text-accent-2">/</span>
        <span>PWA Night vol.53</span>
      </div>
    </Link>
  );
}
