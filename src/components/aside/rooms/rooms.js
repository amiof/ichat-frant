import { useState } from "react";
import { useCookies } from "react-cookie";
import Room from "./room";
import penPic from "../../../pic/pen2.svg";
import closePic from "../../../pic/close.svg";
import singleMessagePic from "../../../pic/singlePerson.svg";
import groupAddPic from "../../../pic/groupAdd.svg";
import speakerPic from "../../../pic/speaker.svg";
function Rooms({ search }) {
  // console.log(search);
  const [cookies] = useCookies("userData");
  const [selectedColor, setSelectedColor] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const rooms = cookies.userData.users[0].rooms;
  const settselector = (id) => {
    setSelectedColor(id);
  };

  const roomFiltered = rooms.filter((item) => {
    if (search && item.name.toLowerCase().includes(search.toLowerCase())) {
      return item;
    } else if (!search) {
      return item;
    }
  });
  // console.log("filtered:", roomFiltered);
  const clickPen = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-gray-900 h-[calc(100%-136px)] text-white relative ">
      <div className="ml-5">
        {roomFiltered.map((item, index) => (
          <div key={index} className="mt-5">
            <Room room={item} settselector={settselector} selectedColor={selectedColor}></Room>
          </div>
        ))}
      </div>
      <div className="group">
        <button type="button" onClick={clickPen}>
          <img
            src={showMenu ? closePic : penPic}
            alt="w"
            className="w-14 h-14 rounded-full outline-white outline absolute bottom-12 right-8  "
          />
        </button>
        <div
          className={
            showMenu
              ? " w-52 h-52 absolute bg-slate-800 bottom-28 right-6 rounded-3xl border border-slate-700 flex flex-col z-20 "
              : "hidden"
          }
        >
          <div className="flex my-3 ml-8  hover:bg-gray-900 max-w-fit p-2 rounded-3xl">
            <img src={speakerPic} alt="speaker pic" className="w-4 h-4 mt-2 ml-2" />
            <button className="text-white ml-2 ">new channel</button>
          </div>
          <div className="flex my-2 ml-8 hover:bg-gray-900 max-w-fit p-2 rounded-3xl">
            <img src={groupAddPic} alt="add group pic" className="w-8 h-8" />
            <button className="text-white ml-2">new group</button>
          </div>
          <div className="flex my-2 ml-8 mb-2 hover:bg-gray-900 max-w-fit p-2 rounded-3xl">
            <img src={singleMessagePic} alt="message pic" className="w-8 h-8" />
            <button className="text-white ml-2">new message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
