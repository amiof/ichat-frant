import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { GET_USER_BYId } from "../graphql/query";

function Message(prop) {
  const { id, sender, message } = prop.messages;
  const [cookies] = useCookies("userData");
  const userId = cookies.userData.login[0].id;
  const [fetchData, { data }] = useLazyQuery(GET_USER_BYId, { variables: { id: sender } });
  useEffect(() => {
    fetchData();
  }, []);
  const pic = data?.users[0]?.pic;
  const username = data?.users[0]?.username;
  return (
    <div className={userId == sender ? "flex flex-row-reverse" : "flex flex-row"}>
      {userId !== sender ? (
        <img src={pic} alt="pic" className="w-10 h-10 rounded-full mt-4 ml-36" />
      ) : null}
      <div
        className={
          userId == sender
            ? "text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 max-h-fit max-w-fit p-2 mr-10  mt-5 rounded-3xl"
            : "text-xl bg-gradient-to-r from-green-600 to-blue-500 max-h-fit max-w-fit p-2 mr-10 ml-4  mt-5 rounded-3xl"
        }
      >
        <div className="text-gray-800 text-lg font-bold">{userId !== sender ? username : null}</div>
        <div className="mt-2 p-2">{message}</div>
      </div>
    </div>
  );
}

export default Message;
