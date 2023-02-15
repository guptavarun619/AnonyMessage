import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GITHUB_USERINFO_API } from "@/constants";
import NavBar from "./NavBar";

function SecurePageHOC(Component) {
  function SecurePage() {
    const { data: session, status } = useSession();

    const router = useRouter();
    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/");
      }
    }, [status]);
    return (
      <div className="flex flex-col ">
        {session && (
          <NavBar img={session?.user.image} email={session?.user.email} />
        )}

        <Component />
      </div>
    );
  }
  return SecurePage;
}

export default SecurePageHOC;
