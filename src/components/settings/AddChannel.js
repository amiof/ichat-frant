import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CREATE_ROOM } from "../graphql/mutation";

function AddChannel() {
  const [channelName, setChannelName] = useState("");
  const [endPoint, setEndPint] = useState("");
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fetchData, { data, error }] = useMutation(CREATE_ROOM, {
    variables: { name: channelName, endPoint, title: Title, description },
  });
  console.log(data);
  const clickHnadler = () => {
    fetchData();
  };
  toast.success("message", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return (
    <div className="flex items-center flex-col ">
      <label></label>
      <input
        value={channelName}
        onChange={(e) => {
          setChannelName(e.target.value);
        }}
        placeholder="name channel"
        className="p-2 mt-5 bg-gray-800 rounded-2xl w-3/4 text-white font-medium text-lg  focus:outline focus:outline-slate-700"
      />

      <input
        value={endPoint}
        onChange={(e) => {
          setEndPint(e.target.value);
        }}
        placeholder="endPoint"
        className="p-2 mt-5 bg-gray-800 rounded-2xl w-3/4 text-white font-medium text-lg  focus:outline focus:outline-slate-700"
      />
      <input
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        className="p-2 mt-5 bg-gray-800 rounded-2xl w-3/4 text-white font-medium text-lg  focus:outline focus:outline-slate-700"
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="description"
        className="p-2 mt-5 bg-gray-800 rounded-2xl w-3/4 text-white font-medium text-lg  focus:outline focus:outline-slate-700"
      />
      <div className="flex justify-center item-center mt-10">
        <button
          onClick={clickHnadler}
          type="button"
          className="text-white p-2 bg-slate-800 border border-slate-700 rounded-2xl hover:bg-green-600"
        >
          create
        </button>
      </div>
    </div>
  );
}

export default AddChannel;
