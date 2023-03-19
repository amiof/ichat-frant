import React from "react";

const AddUserToGroup = () => {
  return (
    <div className="h-full relative">
      <div className="w-full flex justify-center  items-center">
        <input
          className="outline-none bg-gray-800 text-white p-2 rounded-lg mt-10 w-[calc(100%-40px)] m-auto focus:outlien focus:outline-green-400"
          placeholder="username"
        />
      </div>
      <div className="w-full flex justify-center  items-center">
        <input
          className="outline-none bg-gray-800 text-white p-2 rounded-lg mt-10 w-[calc(100%-40px)] m-auto focus:outlien focus:outline-green-400"
          placeholder="endPoint"
        />
      </div>
      <button
        type="submit"
        className="text-white p-2 border border-slate-700 rounded-lg hover:bg-green-600 absolute bottom-20 left-1/3"
      >
        Add User To Group
      </button>
    </div>
  );
};

export default AddUserToGroup;
