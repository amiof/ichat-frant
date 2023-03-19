import React from "react";

const EditTitle = () => {
  return (
    <div className="h-full relative">
      <div className="w-full flex justify-center mt-16  items-center">
        <input
          className="outline-none bg-gray-800 text-white p-2 rounded-lg mt-10 w-[calc(100%-40px)] m-auto focus:outlien focus:outline-green-400"
          placeholder="Inter your Title .."
        />
      </div>
      <button
        type="submit"
        className="text-white p-2 border border-slate-700 rounded-lg hover:bg-green-600 absolute bottom-52 left-1/3"
      >
        change Title
      </button>
    </div>
  );
};

export default EditTitle;
