import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ROOMS } from "../graphql/query";
import { messageContext } from "../sendBar/Sendbar";

function ChatContent() {
  const params = useParams();
  const message = useContext(messageContext);
  const endPoint = "/" + params["*"];
  const [getData, { data }] = useLazyQuery(GET_ROOMS, { variables: { plug: endPoint } });
  const [payload, setPayload] = useState([]);
  useEffect(() => {
    function setmes() {
      setPayload([...payload, message]);
    }
    setmes();
  }, [message]);

  // last data from database
  const cleanMessage = () => {
    setPayload([]);
  };
  useEffect(() => {
    cleanMessage();
    console.log(endPoint);
    getData();
    const lastMessages = data?.rooms[0]?.messages;
    const payloadArray = [];
    lastMessages?.map((item) => {
      let oldMessage = item.message;
      payloadArray.push(oldMessage);
    });
    setPayload(payloadArray);
  }, [params]);
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
