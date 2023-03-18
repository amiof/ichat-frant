import React from "react";
import { useCookies } from "react-cookie";
import picProfile from "../../../pic/egg.webp";
import Search from "./searchBar/Search";

function Navb({ search }) {
  const [cookies, setCookies] = useCookies("userData");
  const { username, phoneNumber, pic } = cookies.userData.login[0];
  return (
    <div className="bg-gray-900 h-20 w-full  flex flex-col lg:flex-row justify-between items-center mx-auto  ">
      <div className=" flex lg:item-center justify-evenly w-full lg:justify-start">
        <img src={pic} className="w-14 h-14 rounded-full ml-5" alt="profilePic"></img>
        <div className="min-w-fit">
          <p className="ml-3 text-white">{username} </p>
          <p className="ml-3 text-gray-500">{phoneNumber}</p>
        </div>
      </div>
      <div className="m-5  w-full lg:m-5 ">
        <Search search={search}></Search>
      </div>
    </div>
  );
}

export default Navb;
