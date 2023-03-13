import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddChannel from "./AddChannel";
function Modal({ open, children, close }) {
  if (!open) return <div>{children}</div>;
  return (
    <>
      <div className="relative">{children}</div>
      <div className="bg-gray-900 z-30 fixed  w-screen h-screen top-0 opacity-75 flex justify-center items-center"></div>
      <div className="bg-slate-900 w-96 h-96 z-50 absolute top-1/4 left-1/3 border border-slate-700 opacity-100 rounded-3xl">
        <button onClick={close} className="text-red-600 font-bold ml-5">
          x
        </button>
        <AddChannel></AddChannel>
      </div>
    </>
  );
}

export default Modal;
