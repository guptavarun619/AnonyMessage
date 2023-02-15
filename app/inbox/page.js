"use client";
import React, { useEffect, useState, useContext } from "react";
import Messages from "@/components/Messages";
import SecurePageHOC from "@/components/SecurePageHOC";
import { FETCH_MESSAGE } from "@/constants";
import { Data } from "@/context/Context";
import Modal from "@/components/Modal";
function Inbox() {
  const [message, setMessage] = useState();
  const { GHUsername } = useContext(Data);
  useEffect(() => {
    if (GHUsername !== undefined) {
      fetch(`${FETCH_MESSAGE}${GHUsername}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setMessage(data.data?.userFound?.messageRecieved));
    }
  }, [GHUsername]);

  return (
    <div className="flex justify-center w-full sm:mt-10 mt-20 ">
      <div className=" lg:w-1/3 md:w-1/2">
        <h1 className=" text-3xl font-bold text-center ">
          Inbox <span className=" shadow-xl rounded-full">😋</span>
        </h1>
        <div className=" mt-5  overflow-y-auto h-full  flex flex-col  ">
          {message?.map((item) => (
            <Messages
              key={item.createdAt}
              createdAt={item.createdAt}
              hint={item.from}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <Modal />
    </div>
  );
}

export default SecurePageHOC(Inbox);
