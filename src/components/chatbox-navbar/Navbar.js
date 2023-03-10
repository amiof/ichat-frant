import { useLazyQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import eggPic from "../../pic/egg.webp";
import { GET_ROOM_BYP_PLUG } from "../graphql/query";
import { user_Data } from "../home/Home.js";

function Navbar() {
  const [connectionStatus, SetConnectionStatus] = useState("connecting...");
  const [counter, setCounter] = useState(0);
  const { dataUser, socketio } = useContext(user_Data);
  setInterval(() => {
    let count = counter + 1;
    setCounter(count);
  }, 20000);

  const [cookies, setCookies] = useCookies("userData");
  const username = cookies.userData.users[0].username;
  socketio.on("connect_error", (error) => {
    SetConnectionStatus("server Connecting error...");
  });
  useEffect(() => {
    try {
      socketio.emit("connectionCheck", username);
      socketio.on("resConnectionCheck", (data) => {
        console.log(data);
        if (data) {
          SetConnectionStatus(data);
        }
      });
    } catch (error) {
      SetConnectionStatus("server Connecting ...");
    }
  }, [counter, username]);

  const params = useParams();
  const plug = "/" + params["*"];
  const [fetchData, { data }] = useLazyQuery(GET_ROOM_BYP_PLUG);

  let name, pic, title;
  if (data) {
    name = data.rooms[0].name;
    pic = data.rooms[0].pic;
    title = data.rooms[0].title;
  }
  // console.log(name);
  useEffect(() => {
    if (Object.keys(params).length) {
      fetchData({ variables: { endPoint: plug.toString() } });
    }
  }, [plug.toString()]);
  return (
    <div className="bg-gray-900 w-[calc(100%-30px)] h-16 py-5 flex items-center m-auto justify-between rounded-3xl px-5 absolute top-2">
      <div className="flex items-center">
        <img src={pic ? pic : eggPic} className="w-12 h-12 rounded-full ml-8" alt="groupPic"></img>
        <div className="flex flex-col ml-6">
          <p>{name ? name : "group name"}</p>
          <p className="text-slate-600 ">
            {connectionStatus ? connectionStatus : "server connecting..."}
          </p>
        </div>
      </div>
      <div className="mr-5">
        <p>{title ? title : "title"}</p>
      </div>
    </div>
  );
}

export default Navbar;
