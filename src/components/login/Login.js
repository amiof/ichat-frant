import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/query";

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const passHandler = (e) => {
    setPassword(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const [fetchQuery, { data }] = useLazyQuery(LOGIN);

  // console.log(error, loading);
  const [cookie, setCookie] = useCookies("userData");

  setCookie("userData", data);
  // console.log(cookie);
  const SendHandler = () => {
    if (username && password) {
      fetchQuery({ variables: { username, password }, nextFetchPolicy: "standby" });
    } else {
      alert("import your username and your password");
    }
  };
  const navigate = useNavigate();
  if (data?.users?.length > 0) {
    navigate("/");
  }
  // console.log(data?.users);
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
              value={username}
              onChange={usernameHandler}
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500 "
            ></input>
          </div>
          <div className="mt-10 ml-10 block">
            <label htmlFor="username" className="text-white">
              password :
            </label>
            <input
              value={password}
              onChange={passHandler}
              placeholder="password"
              name="password"
              type="password"
              className="p-1 bg-slate-800 border border-slate-700 ml-4 rounded-lg text-white outline-none hover:outline hover:outline-green-500"
            ></input>
            {data?.users?.length === 0 ? (
              <h1 className="text-red-500 mt-5">your useranme or password is not correct</h1>
            ) : null}
          </div>

          <div className="flex mt-24   justify-evenly text-white">
            <Link to="/signup">
              <button
                type="button"
                className="border border-blue-600 p-2 text-white rounded-xl hover:bg-blue-500"
              >
                sign up
              </button>
            </Link>
            <button
              type="button"
              onClick={SendHandler}
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
