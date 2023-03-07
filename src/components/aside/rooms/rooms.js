import { useState } from "react";
import { useCookies } from "react-cookie";
import Room from "./room";

function Rooms({ search }) {
  // console.log(search);
  const [cookies] = useCookies("userData");
  const [selectedColor, setSelectedColor] = useState("");
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
  return (
    <div className="bg-gray-900 h-[calc(100%-136px)] text-white">
      <div className="ml-5">
        {roomFiltered.map((item, index) => (
          <div key={index} className="mt-5">
            <Room room={item} settselector={settselector} selectedColor={selectedColor}></Room>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
