import React, { useContext } from "react";
import { formatDistance } from "date-fns";

import { Data } from "@/context/Context";
function Messages({ hint, content, createdAt }) {
  const { setOpenModal, setModalData, modalData } = useContext(Data);

  function handleViewDetails(...args) {
    setModalData({ ...args });
    setOpenModal(true);
  }
  return (
    <div className="flex justify-between pl-10 border bg-white shadow-lg  py-3 px-4 items-center  ">
      <div className=" italic flex flex-col font-semibold justify-center  flex-wrap  ">
        <p>"{content.length > 50 ? `${content.slice(0, 50)}...` : content}"</p>
        <p className=" text-sm font-semibold text-gray-400">
          {formatDistance(new Date(createdAt), new Date())} ago
        </p>
      </div>
      <span
        onClick={() => handleViewDetails(content, hint, createdAt)}
        className=" cursor-pointer"
      >
        view
      </span>
    </div>
  );
}

export default Messages;
