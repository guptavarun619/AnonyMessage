import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBar from "./NavBar";
function SecurePageHOC(Component) {
  function SecurePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
      // console.log(session, status);
      if (status === "unauthenticated") {
        router.push("/");
      }
    }, [status]);
    return (
      <div className="flex flex-col ">
        <NavBar
          img={session?.user.image}
          email={session?.user.email}
          name={session?.user.name}
        />
        <Component />
      </div>
    );
  }
  return SecurePage;
}

export default SecurePageHOC;
