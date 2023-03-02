import React from "react";
import { useCookies } from "react-cookie";
import Room from "./room";

function Rooms() {
  const [cookies, SetCookies] = useCookies("userData");
  const rooms = cookies.userData.users[0].rooms;
  console.log(rooms);
  return (
    <div className="bg-gray-900 h-[calc(100%-136px)] text-white">
      <div className="ml-5">
        {rooms.map((item, index) => (
          <div key={index} className="mt-5">
            <Room room={item}></Room>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
