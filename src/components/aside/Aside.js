import React, { useState } from "react";
import GChanel from "./group/GChanel";
import Navb from "./header/Navb";
import Rooms from "./rooms/rooms";

function Aside() {
  const [search, setSearch] = useState("");
  function settsearch(value) {
    setSearch(value);
  }
  return (
    <div className="h-[calc(100%-52px)] ">
      <Navb search={settsearch}></Navb>
      <div className="mt-8">
        <GChanel></GChanel>
      </div>

      <Rooms search={search}></Rooms>
    </div>
  );
}

export default Aside;
