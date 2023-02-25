import React from "react";

function Sendbar() {
  return (
    <div className=" w-full flex items-center justify-center my-5 ">
      <input
        className="w-full  max-w-xl p-3 bg-gray-900 rounded-3xl outline-gray-600 outline outline-offset-1"
        placeholder="message"
      ></input>
      <button className="ml-2 outline  outline-cyan-500 rounded-full p-3 bg-gray-900" type="submit">
        send
      </button>
    </div>
  );
}

export default Sendbar;
