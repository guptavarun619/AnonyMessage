import React, { useContext, useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useClickOutsideDetector from "@/hooks/useClickOutsideDetector";
import { Data } from "@/context/Context";
function NavBar({ email, img }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useRouter();
  const { GHUsername } = useContext(Data);
  const ref = useRef();

  useClickOutsideDetector(ref, setShowDropDown);
  function handleDropDown() {
    setShowDropDown(true);
  }
  return (
    <div className="flex fixed justify-between items-center py-4 px-10 sm:px-20 box-border top-0 right-0 left-0">
      <h1
        onClick={() => navigate.push("/")}
        className=" font-extrabold text-3xl cursor-pointer"
      >
        AM.
      </h1>
      <div
        ref={ref}
        className="flex justify-center gap-2 shadow-xl p-3 rounded-full relative cursor-pointer bg-[wheat]"
        onClick={() => handleDropDown()}
      >
        <img src={img} alt="img" className=" w-10 h-10 rounded-full" />
        <div className="sm:flex flex-col justify-center hidden">
          <span className="text-sm font-semibold">{GHUsername}</span>
          <span className=" text-xs font-semibold">{email}</span>
        </div>
        {showDropDown && (
          <div className=" border-2 p-3 text-center rounded-lg bg-white absolute mt-14 ">
            <button
              className="text-[#F89E1A] font-bold w-full whitespace-nowrap"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
