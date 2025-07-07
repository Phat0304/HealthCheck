import React, { use, useEffect, useState } from "react";

export default function Table({ year, data }) {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear() + 543;

    if (year.length >= 1) {
      setYears(year);
    } else {
      const last5Years = Array.from({ length: 5 }, (_, i) => currentYear - i);
      setYears(last5Years);
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
      <div className="space-y-3 ">
        <div className="overflow-x-auto  border-1 border-gray-600 bg-base-100 rounded">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800">
            ตรวจร่างกายทั่วไป (Physical Examination)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1 bg-[#66d1df] w-60 text-neutral-800">
                  รายการตรวจ
                </th>
                <th className="columnTable bg-[#66d1df] w-50 ">ค่าปกติ</th>
                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FA]   text-neutral-800">
                    {row.name}
                  </td>
                  <td className="columnTable bg-[#E6F7FA] ">{row.unit}</td>
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

        {/* ------------------------------------table2---------------------------------------- */}

        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded ">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800 ">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <table className="table ">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df] w-60 text-neutral-800">
                  รายการตรวจ
                </th>
                <th className="columnTable bg-[#66d1df] w-50 ">ค่าปกติ</th>
                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df]  min-w-30">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB] ">
                    {row.name}
                  </td>
                  <td className="columnTable bg-[#E6F7FB] ">{row.unit}</td>
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
        {/* -----------------------------table3------------------------------------ */}
        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded ">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800 ">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df] w-60 text-neutral-800">
                  รายการตรวจ
                </th>
                <th className="columnTable bg-[#66d1df] w-50 ">ค่าปกติ</th>
                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB]">
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
        {/* -----------------------------------------------table4--------------------------------- */}
        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800 ">
            การตรวจทางห้องปฏิบัติการ (LABORATORY EXAMINATION)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df] w-60 text-neutral-800">
                  รายการตรวจ
                </th>
                <th className="columnTable bg-[#66d1df] w-50 ">ค่าปกติ</th>
                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB] ">
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

        {/* -----------------------------------------------table5--------------------------------- */}
        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800">
            ตรวจสมรรถภาพปอด (Spirometry)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df]   w-60 text-neutral-800">
                  รายการตรวจ
                </th>
                <th className="columnTable bg-[#66d1df]   w-50 ">ค่าปกติ</th>
                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB]  ">
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

        {/* -----------------------------------------------table6--------------------------------- */}
        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800">
            ตรวจสมรรถภาพการได้ยิน (Screening Audiometry)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df]  w-100  text-neutral-800">
                  หูขวา(dB)
                </th>

                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB]   ">
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
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df]   w-100   text-neutral-800">
                  หูซ้าย(dB)
                </th>

                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df]  min-w-30">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB]   ">
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
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df] w-100 text-neutral-800">
                  ค่าเฉลี่ยหูขวา
                </th>

                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB]   ">
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
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df]   w-100  text-neutral-800">
                  ค่าเฉลี่ยหูซ้าย
                </th>

                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB] w-100 min-w-100 ">
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

        {/* -----------------------------------------------table7--------------------------------- */}
        <div className="overflow-x-auto  border border-base-content bg-base-100 rounded">
          <label className="bg-[#00B2CA] flex items-center justify-center text-center  py-2 rounded-t text-neutral-800 ">
            ผลตรวจสมรรถภาพการมองเห็นด้านชีวอนามัย(Occupation Vision Test)
          </label>
          <table className="table">
            <thead>
              <tr>
                <th className="border-t-1  border-gray-600 p-1  bg-[#66d1df]   w-100  text-neutral-800">
                  รายการตรวจ
                </th>

                {years.map((year) => (
                  <th key={year} className="columnTable bg-[#66d1df] min-w-30 ">
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
                  <td className="border-t-1  border-gray-600 p-1  bg-[#E6F7FB] w-100 min-w-100 ">
                    {row.name}
                  </td>

                  {years.map((year) => (
                    <td className="columnTable min-w-30" key={year}>
                      {row[year] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
