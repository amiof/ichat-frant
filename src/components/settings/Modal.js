import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import AddChannel from "./AddChannel";
import AddGroup from "./addGroup";
import AddUserToGroup from "./addUserToGroup";
import EditPic from "./editPic";
import EditTitle from "./editTitle";
import NewMessage from "./newMessage";
import Remove from "./Remove";

function Modal({ open, children, close, componentModal }) {
  // console.log(componentModal);
  if (!open) return <div>{children}</div>;
  return (
    <>
      <div className="relative">{children}</div>
      <div className="bg-gray-900 z-30 fixed  w-screen h-screen top-0 opacity-75 flex justify-center items-center"></div>
      <div className="bg-slate-900 w-96 h-96 z-50 absolute top-1/4 left-1/3 border border-slate-700 opacity-100 rounded-3xl">
        <button onClick={close} className="text-red-600 font-bold ml-5">
          x
        </button>
        {componentModal == "AddChannel" ? <AddChannel></AddChannel> : null}
        {componentModal == "AddUserToGroup" ? <AddUserToGroup></AddUserToGroup> : null}
        {componentModal == "editPic" ? <EditPic></EditPic> : null}
        {componentModal == "editTitle" ? <EditTitle></EditTitle> : null}
        {componentModal == "remove" ? <Remove></Remove> : null}
        {componentModal == "newMessage" ? <NewMessage></NewMessage> : null}
        {componentModal == "newGroup" ? <AddGroup></AddGroup> : null}
      </div>
    </>
  );
}

export default Modal;
