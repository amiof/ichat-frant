import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_ROOMS } from "../graphql/query";
import { messageContext } from "../sendBar/Sendbar";
import Message from "./Message";

function ChatContent() {
  const params = useParams();
  const { click: message, serverMessage } = useContext(messageContext);
  const endPoint = "/" + params["*"];
  // console.log("serverMessag:", serverMessage);
  // console.log(message);
  const [getData, { data }] = useLazyQuery(GET_ROOMS, { variables: { plug: endPoint } });
  const [serverMessages, setServerMessages] = useState("");
  const [payload, setPayload] = useState([]);

  // useEffect(() => {
  //   function setmes() {
  //     setPayload([...payload, message]);
  //   }
  //   setmes();
  // }, [message]);
  //
  useEffect(() => {
    setPayload([...payload, serverMessage]);
  }, [serverMessage]);

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
      let oldMessage = item;
      payloadArray.push(oldMessage);
    });
    setPayload(payloadArray);
  }, [params]);
  return (
    <div
      id="chat2"
      className="w-full h-[770px] mt-20 divide divide-gray-500  max-w-6xl overflow-y-auto"
    >
      {payload.map((item, index) => (
        <Message messages={item} key={index}></Message>
      ))}
    </div>
  );
}
export default ChatContent;
