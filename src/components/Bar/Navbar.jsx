import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar mainColor fixed rounded-b-5 flex flex-row justify-between  z-100">
        <a href="/" className="ml-10">
          <img
            src="/images/logo1.png"
            alt="import icon"
            className="w-auto h-10 cursor-pointer hover:opacity-80"
          />
        </a>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="" src="/images/user.png" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 border-1 border-[#00B2CA] rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              <li>
                <label></label>
                <button
                  type="button"
                  className="flex justify-end text-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
              {/* <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
