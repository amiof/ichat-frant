import React, { createContext } from "react";
import Aside from "../aside/Aside";
import Chatbox from "../ChatBox/Chatbox";
import { useQuery } from "@apollo/client";
import { GET_All_DATA_FOR_USER } from "../graphql/query";
import { useCookies } from "react-cookie";
import socketIO from "socket.io-client";

const socketio = socketIO.connect("http://localhost:3500");
export const user_Data = createContext();
function Home() {
  const [cookies, setCookies] = useCookies("userData");
  // console.log("userdata:", cookies);
  const { username } = cookies?.userData.users[0];
  const { data } = useQuery(GET_All_DATA_FOR_USER, { variables: { username } });
  // console.log(data);
  return (
    <user_Data.Provider value={{ data, socketio }}>
      <div className="sm:grid sm:grid-cols-10 sm:grid-row-6 sm:h-screen ">
        <div className="hidden sm:bg-gray-900 sm:col-start-1 sm:col-end-4 sm:row-span-full sm:block  ">
          <Aside></Aside>
        </div>
        <div className=" sm:col-start-4 sm:col-span-full sm:row-span-full">
          <Chatbox></Chatbox>
        </div>
      </div>
    </user_Data.Provider>
  );
}

export default Home;
