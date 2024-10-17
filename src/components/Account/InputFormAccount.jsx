import React from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";

const InputFormAccount = ({ close }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    nip: "",
    password: "",
    confPassword: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const send = {
      ...form,
      confPassword: form.password,
      nip: parseInt(form.nip),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        send
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

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      close();
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

  // React.useEffect(() => {
  //   if (form) {
  //     toast.success("", {
  //       position: "top-right",
  //       autoClose: 1000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //     });

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, [1000]);

  //     close();
  //   }
  //   if (form) {
  //     toast.error("", {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // }, []);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 md:space-y-10"
    >
      <div className="flex items-center justify-between">
        <label htmlFor="nip" className="text-gray-400 font-light">
          NIP
        </label>
        <input
          type="text"
          id="nip"
          name="nip"
          value={form.nip}
          onChange={handleChange}
          className="rounded-lg border-gray-200 w-9/12 focus:outline-none focus:border-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="nama" className="text-gray-400 font-light">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="rounded-lg border-gray-200 w-9/12 focus:outline-none focus:border-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="email" className="text-gray-400 font-light">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="rounded-lg border-gray-200 w-9/12 focus:outline-none focus:border-none focus:ring-1 focus:ring-primary"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="text-gray-400 font-light">
          Password
        </label>
        <div className="relative flex items-center w-9/12">
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="rounded-lg border-gray-200 w-full focus:outline-none focus:border-none focus:ring-1 focus:ring-primary"
            required
          />
          <div className="flex items-center" onClick={toggleShowPassword}>
            {showPassword ? (
              <LuEye className="absolute right-5 text-gray-300 cursor-pointer" />
            ) : (
              <LuEyeOff className="absolute right-5 text-gray-300 cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="role" className="text-gray-400 font-light">
          Role
        </label>
        <select
          id="role"
          name="role"
          onChange={handleChange}
          value={form.role}
          data-hs-select='{
            "placeholder": "Select option...",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-1 focus:ring-primary",
            "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300",
            "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50",
            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
            "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-300 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
          }'
          className="hidden"
        >
          <option value="">Select option...</option>
          <option value="kaprodi">Kaprodi</option>
          <option value="dosen">Dosen</option>
        </select>
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
  );
};

InputFormAccount.propTypes = {
  close: PropTypes.func.isRequired,
};

export default InputFormAccount;
