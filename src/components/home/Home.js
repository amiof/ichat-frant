import React from "react";
import Aside from "../aside/Aside";
import Chatbox from "../ChatBox/Chatbox";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_USER } from "../graphql/query";

function Home() {
  // const res = useQuery(GET_ALL_USER);
  // const { loading, data, error } = res;
  // console.log(loading, data, error);
  return (
    <div className="sm:grid sm:grid-cols-8 sm:grid-row-6 sm:h-screen ">
      <div className="hidden sm:bg-slate-900 sm:col-start-1 sm:col-end-4 sm:row-span-full sm:block  ">
        <Aside></Aside>
      </div>
      <div className=" sm:col-start-4 sm:col-span-full sm:row-span-full">
        <Chatbox></Chatbox>
      </div>
    </div>
  );
}

export default Home;
