import React from "react";
import GChanel from "./group/GChanel";
import Navb from "./header/Navb";
import Rooms from "./rooms/rooms";

function Aside() {
  return (
    <div className="h-screen">
      <Navb></Navb>
      <GChanel></GChanel>
      <Rooms className="h-screen"></Rooms>
    </div>
  );
}

export default Aside;
