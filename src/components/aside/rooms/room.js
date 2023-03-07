import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menubar from "./menubar";

function Room({ room, settselector, selectedColor }) {
  const { name, id, endPoint, title, pic } = room;
  const [selected, setSelected] = useState(false);
  // console.log(selectedColor);
  const clickHandler = () => {
    setSelected(true);
    settselector(id);
  };

  return (
    <Link to={endPoint} onClick={clickHandler}>
      <div className={selected && id == selectedColor ? "flex bg-violet-800 rounded-3xl" : "flex"}>
        <div className="relative group">
          <img
            src={pic}
            className="h-14 w-14 rounded-full outline outline-slate-400 relative hover:outline-red-600"
            alt="roomPic"
          ></img>
          <div className="hidden absolute z-20 bottom-[-190px] right-[-150px]  group-hover:inline group-target:inline ">
            <Menubar roomDetail={room}></Menubar>
          </div>
        </div>
        <div className="flex flex-col ml-5">
          <h3 className="text-white">{name}</h3>
          <h4 className="text-slate-400">{title}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Room;
