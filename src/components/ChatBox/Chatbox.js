import React from "react";
import image from "../../pic/background-pic.jpg";
import Navbar from "../chatbox-navbar/Navbar";
import ChatContent from "../chatContent/chatContent";
import Sendbar from "../sendBar/Sendbar";
function Chatbox() {
  return (
    <div
      className="bg-cover w-full h-full bg-no-repeat bg-left text-white flex flex-col items-center relative"
      style={{ backgroundImage: `URL(${image})` }}
    >
      <Navbar></Navbar>
      <Sendbar>
        <ChatContent className="w-full h-full"></ChatContent>
      </Sendbar>
    </div>
  );
}

export default Chatbox;
