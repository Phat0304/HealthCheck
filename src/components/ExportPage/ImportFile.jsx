import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { ImportData } from "../../api/ExportAPI";

export default function ImportFile() {
  const [isLoading, setIsLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("/images/check (3).png");
  const currentYear = new Date().getFullYear() + 543;
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i).map(
    (y) => ({ label: y, value: y })
  );

  useEffect(() => {
    const modal = document.getElementById("loading_modal");
    if (!modal) return;
    if (isLoading) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      yearSelected: selectedYear.value,
      file: selectedFile,
    };

    console.log("form", formData);
    ImportData(formData)
      .then((res) => {
        console.log("resIm", res);

        setTopic("Data Import Successful");
        setMessage(res.data.message);
        setImage("/images/check (3).png");
        CloseModal_Click();
        document.getElementById("warning_modal").showModal();
      })
      .catch((err) => {
        console.log("errIm", err.status);
        console.log("errIm", err.response.data);
        if (err.status === 400) {
          const dataErr = err.response.data;
          setTopic(dataErr.topic);
          setMessage(dataErr.message);
          setImage("/images/cancel.png");
          document.getElementById("warning_modal").showModal();
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const CloseModal_Click = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
    setSelectedYear(null);
    document.getElementById("import_modal").close();
  };
  return (
    <>
      <dialog id="import_modal" className="modal">
        <div className="modal-box bg-slate-50 text-black  ">
          <div className="flex flex-col items-center space-x-3 mb-5 h-50">
            <img src="/images/import.png" alt="bin" className="w-auto h-40 " />
            <h2 className="text-2xl font-medium  text-gray-600">
              Import Excel File
            </h2>
          </div>

          <form className="" onSubmit={handleSubmit}>
            <div className="px-10 space-y-2 h-30">
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls"
                required
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className=" textBox w-full h-10 file:py-2 file:px-4 file:bg-[#00B2CA] file:text-white  file:border-0"
              />

              <Select
                className="text-center"
                options={years}
                required
                placeholder="Selected Year"
                isSearchable={false}
                value={selectedYear}
                onChange={(option) => setSelectedYear(option)}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderWidth: "2px",
                    borderColor: state.isFocused ? "#333333" : "#00B2CA",

                    "&:hover": {
                      borderWidth: "2px",
                      borderColor: "#333333",
                    },
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    maxHeight: "100px",
                    overflowY: "auto",
                    background: "#f8fafc",
                  }),
                  menuList: (base) => ({
                    ...base,
                    maxHeight: "100px",
                    overflowY: "auto",
                  }),
                  dropdownIndicator: (base) => ({
                    ...base,
                    background: "#f8fafc",
                  }),
                }}
              />
            </div>
            <div className="flex justify-center mt-5 space-x-5">
              <button type="submit" className="importButton ">
                import
              </button>
              <button
                type="button"
                onClick={CloseModal_Click}
                className="cancelButton "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <dialog id="warning_modal" className="modal">
        <div className="modal-box bg-slate-50 text-black w-auto h-auto ">
          <div className="flex flex-col items-center space-y-5 w-auto h-auto p-5 ">
            <img src={image} alt="bin" className="w-20 h-20 " />
            <div className="flex flex-col space-y-2 w-auto h-auto">
              <label className="text-xl ">
                {` `}
                {topic}
              </label>
              <label className="text-md ">{message}</label>
            </div>
            <button
              className="cancelButton "
              onClick={() => document.getElementById("warning_modal").close()}
            >
              OK
            </button>
          </div>
        </div>
      </dialog>

      <dialog id="loading_modal" className="modal ">
        <div className="bg-slate-50/0 text-black w-auto h-auto space-y-2">
          <span className="loading loading-spinner  w-40 h-40 bg-[#00B2CA]"></span>
          <p className="text-lg text-slate-50 font-semibold text-center">
            Loading...
          </p>
        </div>
      </dialog>
    </>
  );
}
