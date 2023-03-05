import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import eggPic from "../../pic/egg.webp";
import { GET_ROOM_BYP_PLUG } from "../graphql/query";
function Navbar() {
  const params = useParams();
  const plug = "/" + params["*"];
  const [fetchData, { data }] = useLazyQuery(GET_ROOM_BYP_PLUG);
  // console.log("plug", plug);
  // console.log("data:", data);
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
        <p className="ml-5">{name ? name : "group name"}</p>
      </div>
      <div className="mr-5">
        <p>{title ? title : "title"}</p>
      </div>
    </div>
  );
}

export default Navbar;
