import { useLazyQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./menubar";

function Room({ room }) {
  const { name, id, endPoint, title, pic } = room;

  return (
    <div className="flex  ">
      <div className="relative group">
        <img
          src={pic}
          className="h-14 w-14 rounded-full outline outline-slate-400 relative "
          alt="roomPic"
        ></img>
        <div className="hidden absolute z-20 bottom-[-190px] right-[-150px]  group-hover:inline group-target:inline ">
          <Menubar></Menubar>
        </div>
      </div>
      <div className="flex flex-col ml-5">
        <Link to={endPoint}>
          <h3 className="text-white">{name}</h3>
          <h4 className="text-slate-400">{title}</h4>
        </Link>
      </div>
    </div>
  );
}

export default Room;
