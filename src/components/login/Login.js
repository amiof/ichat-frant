import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center bg-slate-900 h-screen ">
      <div className="border border-slate-700 w-96 h-96 rounded-2xl">
        <div className="flex justify-center flex-col  h-full">
          <div className="  ml-10">
            <label htmlFor="username" className="text-white">
              username:
            </label>
            <input
              placeholder="username"
              name="username"
              type="text"
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500 "
            ></input>
          </div>
          <div className="mt-10 ml-10 block">
            <label htmlFor="username" className="text-white">
              password :
            </label>
            <input
              placeholder="password"
              name="password"
              type="password"
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500"
            ></input>
          </div>
          <div className="flex mt-24   justify-evenly text-white">
            <button
              type="button"
              className="border border-blue-600 p-2 text-white rounded-xl hover:bg-blue-500"
            >
              sign up
            </button>
            <button
              type="button"
              className="border border-green-600 p-2 text-white rounded-xl hover:bg-green-500"
            >
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
