"use client";
import React, { useEffect } from "react";
import Messages from "@/components/Messages";
import SecurePageHOC from "@/components/SecurePageHOC";
function Inbox() {
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
