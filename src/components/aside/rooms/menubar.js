import React, { useContext } from "react";
import trashPic from "../../../pic/menubar/remove2.png";
import addUser from "../../../pic/menubar/adduser.png";
import addPic from "../../../pic/menubar/addpic.png";
import add from "../../../pic/menubar/add.png";
import { user_Data } from "../../home/Home";
function Menubar({ roomDetail }) {
  const { setModal } = useContext(user_Data);
  const { id, name } = roomDetail;
  return (
    <div className="bg-slate-800 w-44 h-48 border border-gray-700 rounded-2xl flex flex-col items-center ">
      <ul className=" mt-3 w-full">
        <li className="flex  mx-5 my-3  ">
          <div>
            <img src={addPic} className="w-6 h-6 " alt="addpic"></img>
          </div>
          <p className=" hover:text-red-600 ml-2 mr-2" onClick={setModal}>
            edit pic{" "}
          </p>
        </li>
        <li className="flex my-3  mx-5">
          <div>
            <img src={add} className="w-6 h-6" alt="add"></img>
          </div>
          <p className=" hover:text-red-600 ml-2 mr-2" onClick={setModal}>
            edite title{" "}
          </p>
        </li>
        <li className="flex my-3  mx-5">
          <div>
            <img src={addUser} className="w-6 h-6" alt="adduser"></img>
          </div>
          <p className=" hover:text-red-600 ml-2 mr-2" onClick={setModal}>
            add to group
          </p>
        </li>
        <li className="flex my-3 mx-5">
          <div>
            <img src={trashPic} className="w-6 h-6" alt="trashpic"></img>
          </div>
          <p className=" hover:text-red-600 ml-2 mr-2" onClick={setModal}>
            remove{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Menubar;
