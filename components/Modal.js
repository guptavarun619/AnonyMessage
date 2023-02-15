import { Data } from "@/context/Context";
import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import useClickOutsideDetector from "@/hooks/useClickOutsideDetector";
function Modal() {
  const { openModal, setOpenModal, modalData } = useContext(Data);
  const ref = useRef();
  useClickOutsideDetector(ref, setOpenModal);

  return (
    <>
      {openModal &&
        createPortal(
          <div
            ref={ref}
            className="modal absolute border-2 top-0 left-0 right-0 bottom-0 w-1/2  translate-x-1/2 h-1/2 translate-y-1/2 bg-white rounded-lg"
          >
            <div className="relative flex justify-center  ">
              <span
                onClick={() => setOpenModal(false)}
                className="absolute right-0 p-2 cursor-pointer "
              >
                x
              </span>
              <div className="border-2 h-[200px]">
                <p>{modalData[0]}</p>
                <span>{modalData[1].browser}</span>
                <span>{modalData[1].ip}</span>
                <span>{modalData[1].os}</span>
                <span>{modalData[1].loc.lat}</span>
                <span>{modalData[1].loc.long}</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Modal;
