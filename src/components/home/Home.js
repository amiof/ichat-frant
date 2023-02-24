import React from "react";
import Aside from "../aside/Aside";
import Chatbox from "../ChatBox/Chatbox";

function Home() {
  return (
    <div className="grid grid-cols-8 grid-row-6 h-screen">
      <div className="bg-green-400 col-start-1 col-end-4 row-span-full">
        <Aside></Aside>
      </div>
      <div className=" col-start-4 col-span-full row-span-full">
        <Chatbox></Chatbox>
      </div>
    </div>
  );
}

export default Home;
