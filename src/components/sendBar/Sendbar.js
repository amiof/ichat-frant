import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { user_Data } from "../home/Home";

export const messageContext = React.createContext();
function Sendbar({ children }) {
  const plug = useParams();
  const endPoint = "/" + plug["*"];
  const { dataUser, socketio } = useContext(user_Data);
  let userId;

  if (dataUser) {
    userId = dataUser?.users[0].id;
  }
  const [message, setmessage] = useState("");
  const [click, setClick] = useState("");
  const changeHandler = (e) => {
    setmessage(e.target.value);
  };
  const [serverMessage, setServerMessage] = useState({});
  socketio.on("serverMessage", (data) => {
    setServerMessage(data);
  });

  const clickHandler = () => {
    setClick({ userId, endPoint, message });
    socketio.emit("message", [userId, endPoint, message]);
  };

  return (
    <>
      <messageContext.Provider value={{ click, serverMessage }}>{children}</messageContext.Provider>
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
