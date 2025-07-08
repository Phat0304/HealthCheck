import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Bar/Sidebar";
import Navbar from "./components/Bar/Navbar";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div className="">
        <div className="">
          <div>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          </div>
          <main
            className={` ${
              isOpen
                ? "pl-60 w-screen duration-500"
                : "pl-14 w-screen duration-500"
            }`}
          >
            <div className="flex flex-col ">
              <div className="flex-1 bg-amber-100 ">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
