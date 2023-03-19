import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_USER_IN_ROOM } from "../graphql/mutation";

const AddUserToGroup = () => {
  const [username, setUsername] = useState("");
  const [endPoint, setEndpoint] = useState("");
  const [sendData, { data, loading, error }] = useMutation(ADD_USER_IN_ROOM, {
    variables: { username, endPoint },
  });
  console.log(data);
  console.log(error);
  return (
    <div className="h-full relative">
      <div className="w-full flex justify-center  items-center">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="outline-none bg-gray-800 text-white p-2 rounded-lg mt-10 w-[calc(100%-40px)] m-auto focus:outlien focus:outline-green-400"
          placeholder="username"
        />
      </div>
      <div className="w-full flex justify-center  items-center">
        <input
          value={endPoint}
          onChange={(e) => {
            setEndpoint(e.target.value);
          }}
          className="outline-none bg-gray-800 text-white p-2 rounded-lg mt-10 w-[calc(100%-40px)] m-auto focus:outlien focus:outline-green-400"
          placeholder="endPoint"
        />
      </div>
      <button
        type="submit"
        onClick={() => {
          sendData();
        }}
        className="text-white p-2 border border-slate-700 rounded-lg hover:bg-green-600 absolute bottom-20 left-1/3"
      >
        Add User To Group
      </button>
    </div>
  );
};

export default AddUserToGroup;
