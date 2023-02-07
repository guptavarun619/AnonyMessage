"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SEND_MESSAGE } from "@/constants";
function SendMessage(id) {
  const { data: session } = useSession();
  const [message, setMessage] = useState();

  // console.log(id.params.username);

  async function fetchMessage() {
    await fetch(`${SEND_MESSAGE}`, {
      method: "POST",
      body: JSON.stringify({
        to: id.params.username,
        from: { ip: 123, loc: "localhost" },
        content: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(" ");
      });
  }

  // write a function to post message {from:device info, to:username,content:message}
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="text-3xl font-extrabold absolute left-0 top-0 py-4 px-14">
        AM.
      </h1>
      <h1 className=" flex text-3xl font-bold ">
        Send message 👉🏾{" "}
        {/* <span>
          <img className="h-10 w-10" src={session?.user.image} alt="image" />{" "}
        </span> */}
      </h1>
      <div className=" sm:w-1/2 w-3/4">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl p-4 outline-none text-lg font-semibold capitalize"
          placeholder="Send message anonymously..."
          cols={20}
          rows={6}
        ></textarea>
      </div>
      <button
        onClick={() => fetchMessage()}
        className=" font-bold px-4 py-2 rounded-lg bg-[wheat]"
      >
        Send
      </button>
    </div>
  );
}

export default SendMessage;
