import React, { createContext, useState } from "react";
import Aside from "../aside/Aside";
import Chatbox from "../ChatBox/Chatbox";
import { useQuery } from "@apollo/client";
import { GET_All_DATA_FOR_USER } from "../graphql/query";
import { useCookies } from "react-cookie";
import socketIO from "socket.io-client";
import Modal from "../settings/Modal";

const socketio = socketIO.connect("http://localhost:3500");
export const user_Data = createContext();
function Home() {
  const [cookies, setCookies] = useCookies("userData");
  const [showModal, setShowModal] = useState(false);
  // console.log("userdata:", cookies);
  const { username } = cookies?.userData.users[0];
  const { data } = useQuery(GET_All_DATA_FOR_USER, { variables: { username } });
  socketio.emit("login", username);
  const setModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Modal
        open={showModal}
        close={() => {
          setShowModal(false);
        }}
      >
        <user_Data.Provider value={{ dataUser: data, socketio, setModal }}>
          <div className="sm:grid sm:grid-cols-10 sm:grid-row-6 sm:h-screen ">
            <div className="hidden sm:bg-gray-900 sm:col-start-1 sm:col-end-4 sm:row-span-full sm:block  ">
              <Aside></Aside>
            </div>
            <div className=" sm:col-start-4 sm:col-span-full sm:row-span-full">
              <Chatbox></Chatbox>
            </div>
          </div>
        </user_Data.Provider>
      </Modal>
    </>
  );
}

export default Home;
