"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import GITHUB_ICON from "assets/icons/github_icon.svg";
import { useRouter } from "next/navigation";
import { ADD_USER, GITHUB_USERINFO_API } from "../constants";
import SecurePageHOC from "@/components/SecurePageHOC";
function Home({ setGHUsername }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function handleRegister() {
      const GHUsername = await fetch(
        `${GITHUB_USERINFO_API}${session?.user?.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setGHUsername(data?.login);
          return data?.login;
        });
      const userCreated = await fetch(ADD_USER, {
        method: "POST",
        body: JSON.stringify({ username: GHUsername }),
      })
        .then((res) => res.json())
        .then((data) => data);
      console.log("userCreated :", userCreated);
    }
    if (status === "authenticated") {
      handleRegister();
    }
  }, [status]);

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold  text-center text-black">
        🎭 AnonyMessage
      </h1>
      <div className="flex flex-col mt-14 font-semibold text-black text-lg">
        <div className=" flex justify-center">
          {status == "unauthenticated" ? (
            <button
              className="flex border-2 gap-2 p-3 rounded-lg bg-white shadow-lg justify-center"
              onClick={() => signIn()}
            >
              <Image src={GITHUB_ICON} alt="github" />
              <span>Sign up/ Sign in</span>
            </button>
          ) : (
            <button
              className="flex border-2 gap-4 p-3 rounded-lg bg-white shadow-lg justify-center"
              onClick={() => router.push("/inbox")}
            >
              <span>📤</span>
              <span>Go to Inbox</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default SecurePageHOC(Home);
