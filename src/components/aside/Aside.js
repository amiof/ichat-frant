import React from "react";
import GChanel from "./group/GChanel";
import Navb from "./header/Navb";
import Rooms from "./rooms/rooms";

function Aside() {
  return (
    <div className="h-[calc(100%-52px)] ">
      <Navb></Navb>
      <div className="mt-8">
        <GChanel></GChanel>
      </div>

      <Rooms></Rooms>
    </div>
  );
}

export default Aside;
