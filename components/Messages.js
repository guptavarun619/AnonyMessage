import React from "react";

function Messages({ hint, content }) {
  return (
    <div>
      <div className="flex flex-col border-2 bg-white shadow-lg rounded-lg ">
        <span className="">{hint}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default Messages;
