import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBar from "./NavBar";

function SecurePageHOC(Component) {
  function SecurePage() {
    const [GHUsername, setGHUsername] = useState();
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
          <NavBar
            img={session?.user.image}
            email={session?.user.email}
            GHUsername={GHUsername}
          />
        )}

        <Component GHUsername={GHUsername} setGHUsername={setGHUsername} />
      </div>
    );
  }
  return SecurePage;
}

export default SecurePageHOC;
