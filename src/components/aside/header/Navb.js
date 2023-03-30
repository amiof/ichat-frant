import React from "react";
import { useCookies } from "react-cookie";
import picProfile from "../../../pic/egg.webp";
import Search from "./searchBar/Search";

function Navb({ search }) {
  const [cookies, setCookies] = useCookies("userData");
  const { username, phoneNumber, pic } = cookies.userData.login[0];
  return (
    <div className="bg-gray-900 h-20 w-full  flex flex-col lg:flex-row justify-between items-center mx-auto relative ">
      <div className=" flex lg:item-center justify-evenly w-full lg:justify-start">
        <div className="group min-w-fit">
          <img
            src={pic}
            className="w-14 h-14 rounded-full ml-5 hover:outline hover:outline-red-600 group "
            alt="profilePic "
          ></img>
          <div className="hidden w-40 h-56 absolute border-slate-600 border top-10 left-16 z-20 bg-slate-800 rounded-xl group-hover:inline-block">
            <ul className="text-white mt-5">
              <li className="mt-5 hover:text-red-600 cursor-pointer ">change pic</li>
              <li className="mt-5 hover:text-red-600">change number </li>
              <li className="mt-5 hover:text-red-600">logout </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="min-w-fit mr-14">
          <p className="ml-3 text-white">{username} </p>
          <p className="ml-3 text-gray-500">{phoneNumber}</p>
        </div>
      </div>
      <div className="m-5 lg:m-5 w-full lg:max-w-fit lg:w-auto">
        <Search search={search}></Search>
      </div>
    </div>
  );
}

export default Navb;
