import React from "react";

const Remove = () => {
  return (
    <div>
      <h1 className="text-white mt-24 text-center">do yo realy want delete this group ?</h1>

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
