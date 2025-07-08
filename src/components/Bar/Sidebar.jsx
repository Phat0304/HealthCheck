import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div
        className={`fixed bg-[#00B2CA] flex flex-col justify-between h-screen px-2 pb-5  transition-all duration-500 ease-in-out  ${
          isOpen ? "w-60 " : "w-14 "
        }`}
      >
        <div>
          {/* ปุ่ม Toggle */}
          <div className={`flex flex-col my-4  items-start `}>
            <button
              className={`text-white w-10 h-10 rounded-full flex justify-center items-center 
              active:bg-slate-200 active:text-gray-800 
              hover:bg-[#81CDDF] transition-all duration-300`}
              onClick={toggleSidebar}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          {/* เมนู */}
          <div className="flex flex-col  overflow-hidden transition-all duration-500 ease-in-out">
            <ul className="space-y-4 text-slate-50">
              <li>
                <Link
                  to="/"
                  className="flex items-center  gap-4 hover:bg-[#81CDDF] p-1 rounded transition-all duration-300"
                >
                  <img
                    src="/images/treatment.png"
                    title="ผลตรวจสุขภาพ"
                    className="w-8 h-8 "
                  />

                  <span
                    className={`text-xl whitespace-nowrap transition-all duration-500 ease-in-out  ${
                      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    ผลตรวจสุขภาพ
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  overflow-hidden transition-all duration-500 ease-in-out">
          <ul className="space-y-4 text-slate-50">
            <li
              onClick={handleLogout}
              className="flex items-center  gap-4 hover:bg-[#81CDDF] p-1 rounded transition-all duration-300"
            >
              <img
                src="/images/logout.png"
                title="ออกจากระบบ"
                className="w-8 h-8 "
              />

              <span
                className={`text-xl whitespace-nowrap transition-all duration-500 ease-in-out  ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                ออกจากระบบ
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
