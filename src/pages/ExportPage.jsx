import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import Table from "../components/ExportPage/Table";
import ImportModal from "../components/ExportPage/ImportFile";
import { searchEmployeeById, ExportData } from "../api/ExportAPI";
import throttle from "lodash.throttle";

export default function ExportPage() {
  const [checkType, setCheckType] = useState("annual");
  const [fromYear, setFromYear] = useState({ label: 2565, value: 2565 });
  const [toYear, setToYear] = useState({ label: 2568, value: 2568 });
  const [selectYear, setSelectYear] = useState([]);
  const [search, setSearch] = useState("15756");
  const [employeeData, setEmployeeData] = useState([]);
  const [healthData, setHealthData] = useState([]);

  const currentYear = new Date().getFullYear() + 543;
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i).map(
    (y) => ({ label: y, value: y })
  );

  const filteredToYearOptions = fromYear
    ? years.filter((y) => y.value >= fromYear.value)
    : years;

  const handleSearchClick = () => {
    if (search !== "") {
      if (checkType === "first") {
        const formData = {
          "5_emp_id": search,
          type: checkType,
          start_year: "",
          end_year: "",
        };
        // sendSearchAPI(formData);
      } else if (checkType === "annual") {
        if (fromYear && toYear) {
          const formData = {
            "5_emp_id": search,
            type: checkType,
            start_year: fromYear.value,
            end_year: toYear.value,
          };

          sendSearchAPI(formData);
        }
      }
    }
  };

  let sortYear = [];

  const sendSearchAPI = (data) => {
    console.log("data", data);
    searchEmployeeById(data)
      .then((res) => {
        const emp = res.data.emp_data;
        const health = res.data.healthcare_data;
        console.log("res", res);
        if (health.length > 0) {
          setEmployeeData(emp);
          setHealthData(health);

          sortYear = getSelectYear();
          setSelectYear(sortYear);

          console.log("sortYear", sortYear);
        } else {
          document.getElementById("errSearch_modal").showModal();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getSelectYear = () => {
    if (!fromYear || !toYear) return [];

    const from = fromYear.value;
    const to = toYear.value;
    const years = [];
    for (let y = from; y <= to; y++) {
      years.push(y);
    }
    const sortedYears = years.sort((a, b) => b - a);
    return sortedYears;
  };

  const handleExport = () => {
    if (
      Array.isArray(selectYear) &&
      selectYear.length > 0 &&
      Array.isArray(employeeData) &&
      employeeData.length > 0 &&
      employeeData[0]?.emp_id
    ) {
      const formData = {
        "5_emp_id": search,
        type: checkType,
        start_year: fromYear.value,
        end_year: toYear.value,
      };
      console.log("formData", formData);

      ExportData(formData)
        .then((res) => {
          // console.log("resExport", res);
          const blob = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
          const url = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "ผลตรวจสุขภาพ.xlsx");
          document.body.appendChild(link);
          link.click();

          // Cleanup
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((err) => {
          alert(err);
        });
      console.log("formData", formData);
    } else {
      document.getElementById("errExport_modal").showModal();
    }
  };

  const searchClick = throttle(handleSearchClick, 1000);
  const Export_Click = throttle(handleExport, 3000);

  return (
    <>
      <div className="bg-slate-50 p-5 space-y-2 ">
        <div className="flex flex-rows  space-x-10">
          <div className="space-x-2">
            <input
              type="radio"
              name="myOption"
              className="radio radio-sm border-cyan-500 checked:border-cyan-500 "
              value="first"
              checked={checkType === "first"}
              onChange={() => setCheckType("first")}
            />
            <label>ตรวจสุขภาพครั้งแรก</label>
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              name="myOption"
              className="radio radio-sm border-cyan-500 checked:border-cyan-500"
              value="annual"
              checked={checkType === "annual"}
              onChange={() => setCheckType("annual")}
            />
            <label>ตรวจสุขภาพประจำปี</label>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-col sm:flex-col space-x-5  lg:items-center md:space-y-2 sm:space-y-2  justify-between">
          <div className="flex flex-rows space-x-5 items-center ">
            <div className="space-x-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="textBox w-40 h-7.5 "
                placeholder="ใส่รหัสพนักงาน 5 ตัวท้าย"
              ></input>
            </div>
            <div className="flex space-x-2 items-center  ">
              <label>ตั้งแต่ปี :</label>
              <Select
                className="text-center"
                options={years}
                value={fromYear}
                placeholder="เลือกปี"
                onChange={(selected) => {
                  setFromYear(selected);
                  if (toYear && selected && toYear.value < selected.value) {
                    setToYear(null);
                  }
                }}
                isSearchable={false}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    fontSize: "15px",
                    minHeight: "10px",
                    height: "30px",
                    width: "150px",
                    borderWidth: "2px",
                    borderColor: state.isFocused ? "#0284C7" : "#00B2CA",

                    "&:hover": {
                      borderWidth: "2px",
                      borderColor: "#00B2CA",
                    },
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    maxHeight: "100px",
                    maxWidth: "120px",
                    overflowY: "auto",

                    borderRadius: "2px",
                  }),
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "150px",
                    overflowY: "auto",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    height: "25px",
                    width: "25px",

                    display: "flex",
                    alignItems: "center", // จัดลูกศรให้อยู่กลางแนวตั้ง
                    justifyContent: "center", // จัดลูกศรให้อยู่กลางแนวนอน
                    padding: "4px",
                    borderRadius: "2px",
                  }),
                }}
              ></Select>
            </div>
            <div className="flex space-x-2 items-center ">
              <label>ถึงปี :</label>
              <Select
                className="text-center"
                options={filteredToYearOptions}
                value={toYear}
                onChange={(selected) => setToYear(selected)}
                placeholder="เลือกปี"
                isSearchable={false}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    fontSize: "15px",
                    minHeight: "10px",
                    height: "30px",
                    width: "150px",
                    borderWidth: "2px",
                    borderColor: state.isFocused ? "#0284C7" : "#00B2CA",

                    "&:hover": {
                      borderWidth: "2px",
                      borderColor: "#00B2CA",
                    },
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    maxHeight: "100px",
                    overflowY: "auto",
                    borderRadius: "2px",
                  }),
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "150px",
                    overflowY: "auto",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    height: "25px",
                    width: "25px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    borderRadius: "2px",
                  }),
                }}
              ></Select>
            </div>
            <button
              className="flex items-center justify-center min-w-10  min-h-8 rounded-md  bg-[#00B2CA] text-slate-50 hover:bg-[#019BB5] active:bg-[#008DA3] border-1 border-[#00A0B0] shadow-sm transition-all duration-200"
              onClick={() => searchClick()}
            >
              <img
                src="/images/search.png"
                alt="search"
                className=" w-4 h-4 "
              />
            </button>
          </div>
          <div className="flex flex-row space-x-5 ">
            <button className="confirmButton " onClick={() => Export_Click()}>
              Export
            </button>
            <button
              className="importButton "
              onClick={() =>
                document.getElementById("import_modal").showModal()
              }
            >
              Import
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------ */}
        <div className="mainLabel flex flex-col ">
          <h2 className="text-xl text-gray-600">ข้อมูลพนักงาน</h2>
          <div className="grid lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-1 md:grid-rows-4  gap-2 ">
            <div className="grid grid-cols-3 items-center space-x-2 ">
              <label className="label flex items-center justify-end ">
                รหัสพนักงาน :{" "}
              </label>
              <label className="labelBox min-w-60 max-w-60 h-8 ">
                {employeeData?.[0]?.emp_id ?? "-"}
              </label>
            </div>
            <div className="grid grid-cols-3 items-center space-x-2">
              <label className="label flex items-center justify-end">
                ชื่อ - นามสกุล :{" "}
              </label>
              <label className="labelBox min-w-60 max-w-60 h-8 ">
                {employeeData?.[0]?.emp_fullname ?? "-"}
              </label>
            </div>
            <div className="grid grid-cols-3 items-center space-x-2">
              <label className="label flex items-center justify-end">
                อายุ :{" "}
              </label>
              <label className="labelBox min-w-60 max-w-60 h-8 ">
                {employeeData?.[0]?.age ?? "-"}
              </label>
            </div>
            <div className="grid grid-cols-3 items-center space-x-2 ">
              <label className="label flex items-center justify-end">
                หมู่เลือด :
              </label>
              <label className="labelBox min-w-60 max-w-60 h-8 ">
                {employeeData?.[0]?.blood_group ?? "-"}
              </label>
            </div>
          </div>
        </div>
        {/* -------------------------------------------------------------------- */}
        <div className="mainLabel flex flex-col">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 space-x-2 mb-2">
            <h2 className="text-xl text-gray-800">ตรวจร่างกายทั่วไป</h2>
          </div>
          <div className="grid lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-1 md:grid-rows-6  gap-2">
            <div className="grid grid-cols-3 space-x-2">
              <label className="label flex items-center justify-end">
                ปี :
              </label>
              <label className="labelBox min-w-30 max-w-30 h-8 ">
                {employeeData?.[0]?.data_year ?? "-"}
              </label>
            </div>

            <div className="grid grid-cols-3 space-x-2 ">
              <label className="label  flex items-center justify-end text-right break-words whitespace-normal">
                ความดันโลหิต (Blood Pressure) :
              </label>
              <div className="flex space-x-2 ">
                <label className="labelBox min-w-30 max-w-30 h-8 ">
                  {employeeData?.[0]?.pressure ?? "-"}
                </label>
                <label className="label ">มม. ปรอท (mmHg)</label>
              </div>
            </div>
            <div className="grid grid-cols-3  space-x-2 ">
              <label className="label flex items-center justify-end">
                ชีพจร (Pulse) :
              </label>
              <div className="flex space-x-2">
                <label className="labelBox min-w-30 max-w-30 h-8 ">
                  {employeeData?.[0]?.pulse ?? "-"}
                </label>
                <label className="label">ครั้ง/นาที (Time/min)</label>
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-2">
              <label className="label flex items-center justify-end">
                น้ำหนัก (Weight) :
              </label>
              <div className="flex space-x-2">
                <label className="labelBox min-w-30 max-w-30 h-8 ">
                  {employeeData?.[0]?.weight ?? "-"}
                </label>
                <label className="label">กก. (Kgs.)</label>
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-2">
              <label className="label flex items-center justify-end">
                ส่วนสูง (Height) :
              </label>
              <div className="flex space-x-2">
                <label className="labelBox min-w-30 max-w-30 h-8 ">
                  {employeeData?.[0]?.height ?? "-"}
                </label>
                <label className="label">ซม. (cm.)</label>
              </div>
            </div>

            <div className="grid grid-cols-3 space-x-2">
              <label className="label flex items-center justify-end">
                ค่า BMI :
              </label>
              <label className="labelBox min-w-30 max-w-30 h-8 ">
                {employeeData?.[0]?.bmi ?? "-"}
              </label>
            </div>
          </div>
        </div>
        <Table year={selectYear} data={healthData}></Table>
        <ImportModal />
      </div>

      <dialog id="errExport_modal" className="modal">
        <div className="modal-box bg-slate-50 text-black w-auto h-auto ">
          <div className="flex flex-col items-center space-y-5 w-auto h-auto  ">
            <img src="/images/cancel.png" alt="bin" className="w-20 h-20 " />
            <div className="flex flex-col space-y-2 w-auto h-auto">
              <label className="text-md ">
                Download failed: No data available
              </label>
            </div>
            <button
              className="cancelButton "
              onClick={() => document.getElementById("errExport_modal").close()}
            >
              OK
            </button>
          </div>
        </div>
      </dialog>

      <dialog id="errSearch_modal" className="modal">
        <div className="modal-box bg-slate-50 text-black w-auto h-auto ">
          <div className="flex flex-col items-center space-y-5 w-auto h-auto  ">
            <img src="/images/cancel.png" alt="bin" className="w-20 h-20 " />
            <div className="flex flex-col space-y-2 w-auto h-auto">
              <label className="text-md ">
                {" "}
                No data found. Please check and try again.
              </label>
            </div>
            <button
              className="cancelButton "
              onClick={() => document.getElementById("errSearch_modal").close()}
            >
              OK
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
