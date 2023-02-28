import React, { useState } from "react";
export const messageContext = React.createContext();
function Sendbar({ children }) {
  const [message, setmessage] = useState("");
  const [click, setClick] = useState("");
  const changeHandler = (e) => {
    setmessage(e.target.value);
  };

  const clickHandler = () => {
    setClick(message);
  };
  return (
    <>
      <messageContext.Provider value={click}>{children}</messageContext.Provider>
      <div className=" w-full flex items-center justify-center my-5 ">
        <input
          value={message}
          onChange={changeHandler}
          className="w-full  max-w-xl p-3 bg-gray-900 rounded-3xl outline-gray-600 outline outline-offset-1"
          placeholder="message"
        ></input>
        <button
          onClick={clickHandler}
          className="ml-2 outline  outline-cyan-500 rounded-full p-3 bg-gray-900"
          type="submit"
        >
          send
        </button>
      </div>
    </>
  );
}

export default Sendbar;
