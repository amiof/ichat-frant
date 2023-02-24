import React from "react";
import image from "../../pic/background-pic.jpg";
function Chatbox() {
  return (
    <div
      className="bg-cover w-full h-full bg-no-repeat bg-right text-white"
      style={{ backgroundImage: `URL(${image})` }}
    >
      Chatbox
    </div>
  );
}

export default Chatbox;
