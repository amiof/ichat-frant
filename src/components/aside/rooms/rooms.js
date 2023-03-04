import localStorage, { get } from "local-storage";
import { useCookies } from "react-cookie";
import Room from "./room";

function Rooms({ search }) {
  // console.log(search);
  const [cookies] = useCookies("userData");
  const rooms = cookies.userData.users[0].rooms;
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
            <Room room={item}></Room>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
