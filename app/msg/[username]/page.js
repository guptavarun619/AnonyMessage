"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SEND_MESSAGE } from "@/constants";
import UAParser from "ua-parser-js";
function SendMessage(id) {
  const [message, setMessage] = useState();
  const [browserDetails, setBrowserDetails] = useState({});
  const [error, setError] = useState();
  const navigate = useRouter();
  useEffect(() => {
    const parser = new UAParser();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    }

    function showPosition(position) {
      setBrowserDetails({
        ip: "198123",
        loc: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
        browser: parser.getResult().browser.name,
        os: parser.getResult().os.name,
      });
    }

    getLocation();
  }, []);

  async function sendhMessage() {
    await fetch(`${SEND_MESSAGE}`, {
      method: "POST",
      body: JSON.stringify({
        to: id.params.username,
        from: browserDetails,
        content: message,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setMessage(" ");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      {error ? (
        <span className=" text-5xl font-semibold bg-white p-4 rounded-lg ">
          {error}
          😥
        </span>
      ) : (
        <>
          <h1
            onClick={() => navigate.push("/")}
            className="text-3xl font-extrabold absolute left-0 top-0 py-4 px-14"
          >
            AM.
          </h1>
          <h1 className=" flex text-3xl font-bold ">Send message 👉🏾 </h1>
          <div className=" sm:w-1/2 w-3/4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl p-4 outline-none text-lg font-semibold capitalize"
              placeholder="Send message anonymously..."
              cols={20}
              rows={6}
            ></textarea>
          </div>
          <button
            disabled={!message}
            onClick={sendhMessage}
            className={`${
              !message && " text-neutral-500"
            } font-bold px-4 py-2 rounded-lg bg-[wheat]`}
          >
            Send
          </button>
        </>
      )}
    </div>
  );
}

export default SendMessage;
