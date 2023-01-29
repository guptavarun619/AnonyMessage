"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import GITHUB_ICON from "assets/icons/github_icon.svg";
export default function Home() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log(session, status);
  }, [status]);
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold  text-center text-black">
        🎭 AnonyMessage
      </h1>
      <div className="flex flex-col mt-14 font-semibold text-black text-lg">
        <div className=" flex justify-center">
          {status == "unauthenticated" && (
            <button
              className="flex border-2 gap-2 p-3 rounded-lg bg-white shadow-lg justify-center"
              onClick={() => signIn()}
            >
              <Image src={GITHUB_ICON} alt="github" />
              <span>Sign up/ Sign in</span>
            </button>
          )}
          {status == "authenticated" && (
            <button onClick={() => signOut()}>Sign Out </button>
          )}
        </div>
      </div>
    </div>
  );
}
