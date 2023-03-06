import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { SINGUP } from "../graphql/mutation";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fetchData, { data, error }] = useMutation(SINGUP);
  const [cookie, setCookie] = useCookies("userData");
  const goToHome = useNavigate();

  if (data) {
    data["users"] = data["createUser"];

    setCookie("userData", data);
    goToHome("/");
  }
  const clickHandler = () => {
    fetchData({ variables: { username, password, phoneNumber } });
  };

  const passChengeHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameChengeHandler = (e) => {
    setUsername(e.target.value);
  };
  const phoneChengeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  console.log("data", data);
  console.log("error", error);
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
              value={username}
              onChange={usernameChengeHandler}
              name="username"
              type="text"
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500 "
            ></input>
          </div>
          <div className="mt-10 ml-10 block">
            <label htmlFor="password" className="text-white">
              password :
            </label>
            <input
              placeholder="password"
              value={password}
              onChange={passChengeHandler}
              name="password"
              type="password"
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500"
            ></input>
          </div>
          <div className="mt-10 ml-2 block">
            <label htmlFor="phoneNumber" className="text-white">
              phoneNumber :
            </label>
            <input
              value={phoneNumber}
              onChange={phoneChengeHandler}
              placeholder="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              className="p-1 bg-slate-800 border border-slate-700 ml-2 rounded-lg text-white outline-none hover:outline hover:outline-green-500"
            ></input>
          </div>
          <div className="flex mt-24   justify-evenly text-white">
            <Link to="/login">
              <button
                type="button"
                className="border border-green-600 p-2 text-white rounded-xl hover:bg-green-500"
              >
                login
              </button>
            </Link>
            <button
              type="button"
              onClick={clickHandler}
              className="border border-blue-600 p-2 text-white rounded-xl hover:bg-blue-500"
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
