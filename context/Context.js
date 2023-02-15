"use client";

import { createContext, useState } from "react";

export const Data = createContext(null);
function Context({ children }) {
  const [GHUsername, setGHUsername] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState();

  return (
    <Data.Provider
      value={{
        GHUsername,
        setGHUsername,
        openModal,
        setOpenModal,
        modalData,
        setModalData,
      }}
    >
      {children}
    </Data.Provider>
  );
}

export default Context;
