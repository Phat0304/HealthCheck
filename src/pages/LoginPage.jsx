import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../api/Login";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      emp_id: username,
      password: password,
    };
    console.log("data", formData);

    checkLogin(formData)
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          const token = res.data.password;
          console.log("token ", token);

          sessionStorage.setItem("token", token);

          navigate("/");
        }
      })
      .catch((err) => {
        console.log("err", err);
        if (err.status === 404) {
          setMessage(true);
        } else {
          alert(err.message);
        }
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-[#E6F7F9]">
        <div className="bg-[#FFFFFF] p-8 rounded-2xl flex flex-row justify-center items-center shadow-2xl ">
          <img
            src="/images/logo1.png"
            alt="bin"
            className="w-auto h-50 mr-5 "
          />

          <form className="flex flex-col justify-top items-center  h-auto rounded-xl p-5 ">
            <div className="flex flex-col  w-full ">
              <label className="label border-2 border-slate-300 rounded-4xl py-2 px-5  space-x-2  mb-2">
                <img
                  src="/images/user (2).png"
                  alt="bin"
                  className="w-4 h-4 "
                />
                <input
                  type="text"
                  className=" w-full h-8  text-[#333333] text-xl  border-none focus:outline-none focus:ring-0 placeholder:text-slate-500"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </label>

              <label className="label  border-2 border-slate-300 rounded-4xl py-2 px-5 space-x-2">
                <img
                  src="/images/lock (1).png"
                  alt="bin"
                  className="w-4 h-4 "
                />
                <input
                  type="Password"
                  className="w-full h-8 text-[#333333] text-xl border-none focus:outline-none focus:ring-0 placeholder:text-slate-500 "
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </label>

              <span
                className={`text-red-500 text-sm text-center  block transition-all duration-200 ${
                  message ? "visible" : "invisible"
                }`}
              >
                username หรือ password ไม่ถูกต้อง!
              </span>

              <button
                className="p-2 bg-[#00B2CA] mt-4  text-xl text-slate-50 rounded-4xl border-1 border-slate-300 active:bg-slate-300 font-medium"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
