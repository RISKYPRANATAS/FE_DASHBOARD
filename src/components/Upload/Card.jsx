import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

const Card = () => {
  const [file, setFile] = React.useState(null);
  const fileInputRef = React.useRef(null); // Buat ref untuk input file

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/portfolios",
        formData
      );
      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset nilai input file
      }
      mutate("portfolios");
    } catch (error) {
      toast.error(error.response.data.msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  console.log(file);

  return (
    <div className="flex flex-col space-y-10 bg-white border shadow-sm rounded-xl overflow-hidden min-h-full p-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row justify-between space-y-2 lg:items-center">
          <label htmlFor="file" className="text-gray-400 font-light">
            Pilih Portofolio
          </label>
          <div className="w-full lg:w-11/12 flex flex-col">
            <input
              type="file"
              name="file"
              id="file"
              ref={fileInputRef}
              onChange={handleChange}
              className="block border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none
        file:bg-gray-50 file:border-0
          file:me-4
          file:py-4 file:px-4"
            />
            <span className="text-sm self-center lg:self-start text-gray-400 font-light">
              PNG, JPG, JPEG, PDF are allowed & max 5mb
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-primary/80 focus:outline-none focus:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
