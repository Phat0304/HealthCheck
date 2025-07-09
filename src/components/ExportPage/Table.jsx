import React, { use, useEffect, useState } from "react";

export default function Table({ year, data }) {
  const [years, setYears] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (year.length >= 1) {
      setYears(year);
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [year]);

  const TableData1 = (Array.isArray(data) ? data : []).slice(0, 9);
  const TableData2 = (Array.isArray(data) ? data : []).slice(9, 18);
  const TableData3 = (Array.isArray(data) ? data : []).slice(18, 28);
  const TableData4 = (Array.isArray(data) ? data : []).slice(28, 52);
  const TableData5 = (Array.isArray(data) ? data : []).slice(52, 56);
  const TableData61 = (Array.isArray(data) ? data : []).slice(56, 63);
  const TableData62 = (Array.isArray(data) ? data : []).slice(63, 70);
  const TableData63 = (Array.isArray(data) ? data : []).slice(70, 72);
  const TableData64 = (Array.isArray(data) ? data : []).slice(72, 75);
  const TableData7 = (Array.isArray(data) ? data : []).slice(75, 82);

  return (
    <>
      {/* --------------------------------------------table1--------------------------------------------- */}
      <div className={`space-y-3  ${isShow ? "visible" : "hidden"} `}>
        <div className=" border-1 border-gray-600 bg-base-100 rounded font-medium ">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            ตรวจร่างกายทั่วไป (Physical Examination)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className="columnCheck w-60 min-w-60 ">รายการตรวจ</th>
                  <th className="columnUnit w-40 min-w-40 ">ค่าปกติ</th>
                  {years.map((year) => (
                    <th key={year} className="columnYear  min-w-30  ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData1.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-black ">
                      {row.name}
                    </td>
                    <td className="columnTable  bg-[#E6F7FA] ">{row.unit}</td>
                    {years.map((year) => (
                      <td className="columnTable  " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ------------------------------------table2---------------------------------------- */}

        <div className="  border-1 border-gray-600 bg-base-100 rounded font-medium">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm  ">
              <thead>
                <tr>
                  <th className=" columnCheck w-60 min-w-60 ">รายการตรวจ</th>
                  <th className="  columnUnit w-40 min-w-40  ">ค่าปกติ</th>
                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData2.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-black ">
                      {row.name}
                    </td>
                    <td className="columnTable  bg-[#E6F7FA] ">{row.unit}</td>
                    {years.map((year) => (
                      <td className="columnTable  " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* -----------------------------table3------------------------------------ */}
        <div className="  border-1 border-gray-600 bg-base-100 rounded font-medium ">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className="columnCheck w-60 min-w-60 ">รายการตรวจ</th>
                  <th className="  columnUnit w-40 min-w-40  ">ค่าปกติ</th>
                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData3.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-black ">
                      {row.name}
                    </td>
                    <td className="columnTable  bg-[#E6F7FA] ">{row.unit}</td>
                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* -----------------------------------------------table4--------------------------------- */}
        <div className=" border-1 border-gray-600 bg-base-100 rounded font-medium ">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className=" columnCheck w-60 min-w-60 ">รายการตรวจ</th>
                  <th className=" columnUnit w-40 min-w-40 ">ค่าปกติ</th>
                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData4.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-black ">
                      {row.name}
                    </td>
                    <td className="columnTable  bg-[#E6F7FA] ">{row.unit}</td>
                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -----------------------------------------------table5--------------------------------- */}
        <div className=" border-1 border-gray-600 bg-base-100 rounded font-medium">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            ตรวจสมรรถภาพปอด (Spirometry)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className="columnCheck w-60 min-w-60 ">รายการตรวจ</th>
                  <th className=" columnUnit w-40 min-w-40 ">ค่าปกติ</th>
                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData5.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-black ">
                      {row.name}
                    </td>
                    <td className="columnTable bg-[#E6F7FB] ">{row.unit}</td>
                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -----------------------------------------------table6--------------------------------- */}
        <div className=" border-1 border-gray-600 bg-base-100 rounded font-medium">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            ตรวจสมรรถภาพการได้ยิน (Screening Audiometry)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className=" columnCheck w-100 min-w-100   ">หูขวา(dB)</th>

                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData61.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA] text-center   text-black ">
                      {row.name}
                    </td>

                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <thead>
                <tr>
                  <th className="columnCheck w-100 min-w-100  ">หูซ้าย(dB)</th>

                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData62.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]  text-center  text-black ">
                      {row.name}
                    </td>

                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <thead>
                <tr>
                  <th className=" columnCheck w-100 min-w-100  ">
                    ค่าเฉลี่ยหูขวา
                  </th>

                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData63.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA] text-center   text-black ">
                      {row.name}
                    </td>

                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <thead>
                <tr>
                  <th className="columnCheck w-100 min-w-100 ">
                    ค่าเฉลี่ยหูซ้าย
                  </th>

                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData64.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]  text-center text-black ">
                      {row.name}
                    </td>

                    {years.map((year) => (
                      <td className="columnTable " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -----------------------------------------------table7--------------------------------- */}
        <div className="  border-1 border-gray-600 bg-base-100 rounded font-medium">
          <label className="bg-[#12cbd4] flex items-center justify-center text-center  py-2 rounded-t text-black font-semibold">
            ผลตรวจสมรรถภาพการมองเห็นด้านชีวอนามัย(Occupation Vision Test)
          </label>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm ">
              <thead>
                <tr>
                  <th className="columnCheck w-100 min-w-100 ">รายการตรวจ</th>

                  {years.map((year) => (
                    <th key={year} className=" columnYear  min-w-30 ">
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {TableData7.map((row, idx) => (
                  <tr
                    key={idx}
                    className=" odd:bg-slate-50 even:bg-[#ededed] hover:bg-gray-300 "
                  >
                    <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]  text-center  text-black ">
                      {row.name}
                    </td>

                    {years.map((year) => (
                      <td className="columnTable text-center " key={year}>
                        {row[year] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
