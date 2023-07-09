import { getUserByEmail } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { FiUserPlus } from "react-icons/fi";

type AuthUserType = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

export async function HeaderUserIcon() {
  const data = await getServerSession();
  const user = data?.user ?? null;
  console.log("user", data);
  const userInfo = user && user.email ? await getUserByEmail(user.email) : null;

  const linkPath = !!userInfo ? `/users/${userInfo.id}` : "/users/login";

  return (
    <>
      <Link href={linkPath}>
        {!!user ? (
          <AuthenticatedUserIcon user={user}></AuthenticatedUserIcon>
        ) : (
          <NonAuthenticatedUserIcon></NonAuthenticatedUserIcon>
        )}
      </Link>
    </>
  );
}

const AuthenticatedUserIcon = ({ user }: { user: AuthUserType }) => {
  return (
    <div
      className="
        inline-block cursor-pointer
        bg-none p-1 align-bottom
      "
    >
      <Image
        src={user.image ?? ""}
        alt=""
        width={30}
        height={30}
        className="rounded-full"
      ></Image>
    </div>
  );
};

const NonAuthenticatedUserIcon = () => {
  return (
    <div
      className="
        inline-block cursor-pointer
        bg-none p-1 align-bottom
      "
    >
      <FiUserPlus size={20}></FiUserPlus>
    </div>
  );
};
