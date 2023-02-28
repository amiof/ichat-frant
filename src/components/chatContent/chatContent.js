import React, { useContext, useEffect, useState } from "react";
import { messageContext } from "../sendBar/Sendbar";
function ChatContent() {
  const [payload, setPayload] = useState([]);
  // console.log(payload);
  const message = useContext(messageContext);
  useEffect(() => {
    function setmes() {
      setPayload([...payload, message]);
    }
    setmes();
  }, [message]);

  return (
    <div
      id="chat2"
      className="w-full h-[770px] mt-20 divide divide-gray-500   max-w-6xl overflow-y-auto"
    >
      {payload.map((item, index) => (
        <div key={index} className="flex flex-row-reverse">
          <h1 className="text-xl bg-blue-700 max-h-fit max-w-fit p-2 mr-10  mt-5 rounded-3xl">
            {item}
          </h1>
        </div>
      ))}
    </div>
  );
}
export default ChatContent;
