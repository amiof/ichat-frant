import React from "react";
import Aside from "../aside/Aside";
import Chatbox from "../ChatBox/Chatbox";
import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from "../graphql/query";

function Home() {
  const res = useQuery(GET_ALL_USER);
  const { loading, data, error } = res;
  console.log(loading, data, error);
  return (
    <div className="grid grid-cols-8 grid-row-6 h-screen">
      <div className="bg-green-400 col-start-1 col-end-4 row-span-full">
        <Aside></Aside>
      </div>
      <div className=" col-start-4 col-span-full row-span-full">
        <Chatbox></Chatbox>
      </div>
    </div>
  );
}

export default Home;
