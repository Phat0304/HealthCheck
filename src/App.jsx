import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Bar/Sidebar";
import Navbar from "./components/Bar/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <div>
          <div>
            <Navbar />
          </div>
          <main className="">
            <div className="h-16"></div>
            <div className="flex flex-row h-auto bg-slate-50 ">
              <Sidebar />
              <div className="flex-1 bg-slate-800">
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
