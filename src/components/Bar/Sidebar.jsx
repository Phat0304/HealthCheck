import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="bg-cyan-100 lg:w-80 md:w-50 sm:w-50 h-200  rounded-b  sticky top-16  ">
        <div className="flex flex-col items-center gap-2 m-5">
          <Link className="btn buttonBar lg:w-60 md:w-30 sm:w-30 h-10 text-xl  p-2 rounded">
            ผลตรวจสุขภาพ
          </Link>
        </div>
      </div>
    </>
  );
}
