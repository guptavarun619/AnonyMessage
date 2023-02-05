"use client";
import React, { useEffect, useState } from "react";
import Messages from "@/components/Messages";
import SecurePageHOC from "@/components/SecurePageHOC";
import { BASE_URL, FETCH_MESSAGE } from "@/constants";
import { useSession } from "next-auth/react";
function Inbox() {
  const [message, setMessage] = useState();
  const { data: session, status } = useSession();

  const messages = [
    { hint: "anish", content: "hey buddy this is just a tesst message" },
    { hint: "varun", content: "hey buddy this is just a tesst message" },
    { hint: "johndoe", content: "hey buddy this is just a tesst message" },
    { hint: "picasso", content: "hey buddy this is just a tesst message" },
    { hint: "jane", content: "hey buddy this is just a tesst message" },
    { hint: "anish", content: "hey buddy this is just a tesst message" },
    { hint: "anish", content: "hey buddy this is just a tesst message" },
    { hint: "anish", content: "hey buddy this is just a tesst message" },
  ];
  // useEffect(() => {
  //   fetch(`${FETCH_MESSAGE}/${GHUsername}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log("fetch message :", data));
  // }, []);
  return (
    <div className="flex justify-center w-full sm:mt-10 mt-20 ">
      <div className=" lg:w-1/3 md:w-1/2">
        <h1 className=" text-3xl font-bold text-center ">
          Inbox <span className=" shadow-xl rounded-full">😋</span>
        </h1>
        <div className=" mt-5  rounded-lg p-4 flex flex-col gap-2  ">
          {messages.map((item) => (
            <Messages hint={item.hint} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecurePageHOC(Inbox);
