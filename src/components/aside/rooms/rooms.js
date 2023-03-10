import { useState } from "react";
import { useCookies } from "react-cookie";
import Room from "./room";
import pen from "../../../pic/pen2.svg";
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
  console.log(showMenu);
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
            src={pen}
            alt="w"
            className="w-14 h-14 rounded-full outline-white outline absolute bottom-12 right-8  "
          />
        </button>
        <div
          className={
            showMenu
              ? "block w-52 h-20 absolute bg-slate-800 bottom-28 right-6 rounded-3xl border border-slate-700"
              : "hidden"
          }
        >
          <p className="text-white">test</p>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
