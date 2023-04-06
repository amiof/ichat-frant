import React from "react";
import { useSelector } from "react-redux";

const Remove = () => {
  const roomData = useSelector((state) => state.roomData);
  console.log("roomData", roomData);
  return (
    <div>
      <h1 className="text-white mt-24 text-center">do yo really want delete this group ?</h1>

      <button
        type="submit"
        className="text-white p-2 border border-slate-700 rounded-lg hover:bg-red-600 absolute bottom-20 left-1/3"
      >
        Remove Group
      </button>
    </div>
  );
};

export default Remove;
