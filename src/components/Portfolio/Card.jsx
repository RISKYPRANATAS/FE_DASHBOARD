import axios from "axios";
import { HSStaticMethods } from "preline";
import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";

const Card = () => {
  const location = useLocation();

  React.useEffect(() => {
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/api/portfolios");
    return response.data;
  };

  const { data } = useSWR("portfolios", fetcher, {
    refreshInterval: 2000,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });

  React.useEffect(() => {
    if (data) {
      HSStaticMethods.autoInit();
    }
  }, [data]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/portfolios/${id}`
      );
      mutate("portfolios");
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
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden">
      <div className="bg-primary border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
        <p className="mt-1 text-xl font-bold text-white">Portofolio</p>
      </div>
      <div className="flex flex-col mt-5">
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
                      STATUS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
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
                        {d.user.nip}
                      </td>
                      <td className="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {d.user.name}
                      </td>
                      <td className="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {d.status}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="flex space-x-5 justify-center">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-primary text-white focus:outline-none px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false"
                            aria-controls={`hs-portfolio-view-${d.uuid}`}
                            data-hs-overlay={`#hs-portfolio-view-${d.uuid}`}
                          >
                            Lihat
                          </button>
                          <div
                            id={`hs-portfolio-view-${d.uuid}`}
                            className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
                            aria-labelledby={`hs-portfolio-view-label-${d.uuid}`}
                          >
                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] 2xl:max-w-[67.5rem] lg:max-w-2xl xl:max-w-5xl flex items-center">
                              <div className="lg:w-full xl:w-full 2xl:w-full lg:min-h-[450px] xl:min-h-[500px] 2xl:min-h-[500px] max-w-[1920px]:min-h-[800px] flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                                <div className="flex justify-between items-center py-3 px-4">
                                  <h3
                                    id={`hs-portfolio-view-label-${d.uuid}`}
                                    className="font-bold text-gray-800"
                                  >
                                    Lihat Portofolio
                                  </h3>
                                  <button
                                    type="button"
                                    className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-label="Close"
                                    data-hs-overlay={`#hs-portfolio-view-${d.uuid}`}
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
                                  <iframe
                                    src={d.imagesURL}
                                    title={d.images}
                                    className="w-full lg:h-[400px] 2xl:h-[500px] max-w-[1920px]:h-[700px] object-cover object-center"
                                  ></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDelete(d.uuid)}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-[#ff3e1c] text-white focus:outline-none px-4 py-2 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Hapus
                          </button>
                        </div>
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
