import React from "react";

function Room({ room }) {
  const { name, id, endpoint, title, pic } = room;
  console.log(room);
  return (
    <div className="flex">
      <img
        src={pic}
        className="h-14 w-14 rounded-full outline outline-slate-400 "
        alt="roomPic"
      ></img>
      <div className="flex flex-col ml-5">
        <h3 className="text-white">{name}</h3>
        <h4 className="text-slate-400">{title}</h4>
      </div>
    </div>
  );
}

export default Room;
