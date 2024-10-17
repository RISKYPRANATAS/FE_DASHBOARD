import React from "react";
import { useLocation } from "react-router-dom";
import { HSOverlay, HSStaticMethods } from "preline";
import InputFormAccount from "./InputFormAccount";
import axios from "axios";
import useSWR, { mutate } from "swr";
import { toast } from "react-toastify";

const Card = () => {
  const location = useLocation();
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    return response.data;
  };

  const { data } = useSWR("users", fetcher);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${id}`
      );
      mutate("users");
      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      HSOverlay.close(document.getElementById("hs-vertically-centered-modal"));
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden">
      <div className="bg-primary border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <p className="mt-1 text-xl font-bold text-white">Akun</p>
      </div>
      <div className="p-4 md:p-5">
        <button
          className="bg-primary hover:bg-primary/80 text-white px-7 py-3 rounded-xl"
          // aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-vertically-centered-modal"
          data-hs-overlay="#hs-vertically-centered-modal"
        >
          Tambah Data
        </button>

        <div
          id="hs-vertically-centered-modal"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
          aria-labelledby="hs-vertically-centered-modal-label"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4">
                <h3
                  id="hs-vertically-centered-modal-label"
                  className="font-bold text-gray-800"
                >
                  Tambah Akun
                </h3>
                <button
                  type="button"
                  ref={modalRef}
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-vertically-centered-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <InputFormAccount close={closeModal} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      NO
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      NIP
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      NAMA
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      EMAIL
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      AKSI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data?.data?.map((d, index) => (
                    <tr key={d.uuid}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {d.nip}
                      </td>
                      <td className="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {d.name}
                      </td>
                      <td className="lowercase px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {d.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => handleDelete(d.uuid)}
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-[#ff3e1c] text-white focus:outline-none px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
