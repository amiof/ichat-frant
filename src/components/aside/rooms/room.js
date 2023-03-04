import { useLazyQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";

function Room({ room }) {
  const { name, id, endPoint, title, pic } = room;

  return (
    <div className="flex ">
      <img
        src={pic}
        className="h-14 w-14 rounded-full outline outline-slate-400 "
        alt="roomPic"
      ></img>
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
