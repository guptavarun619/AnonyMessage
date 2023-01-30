import React, { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import useClickOutsideDetector from "@/hooks/useClickOutsideDetector";
function NavBar({ email, img, name }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const ref = useRef();
  useClickOutsideDetector(ref, setShowDropDown);
  function handleDropDown() {
    setShowDropDown(true);
  }
  return (
    <div className=" flex justify-between items-center py-4 sm:px-20 box-border  absolute top-0 right-0 left-0">
      <h1 className=" font-extrabold text-3xl">AM.</h1>
      <div
        ref={ref}
        className="flex justify-center gap-2 shadow-xl p-3 rounded-xl relative cursor-pointer"
        onClick={() => handleDropDown()}
      >
        <img src={img} alt="img" className=" w-10 h-10" />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold">{name}</span>
          <span className=" text-xs font-semibold">{email}</span>
        </div>
        {showDropDown && (
          <div className=" border-2 p-3 text-center rounded-lg bg-white absolute mt-14 w-full ">
            <button
              className="text-[#F89E1A] font-bold"
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
