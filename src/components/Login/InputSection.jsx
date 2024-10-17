import React from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import InputForm from "../UI/InputForm";
import ButtonSection from "./ButtonSection";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../features/authSlice";
import { toast } from "react-toastify";

const InputSection = ({ label, htmlFor, type, id, name }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(form));
  };

  React.useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    if (isError) {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate, isError, message]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-5 md:mt-10">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-y-4">
          <InputForm
            label={label}
            htmlFor={htmlFor}
            type={type}
            id={id}
            name={name}
            onChange={handleChange}
            style="py-3 px-4 md:py-5 lg:py-3 block w-full border-gray-200 rounded-lg text-sm md:text-lg lg:text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          />

          <InputForm
            label="PASSWORD"
            htmlFor="password"
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            name="password"
            onChange={handleChange}
            style="py-3 px-4 md:py-5 lg:py-3 block w-full border-gray-200 rounded-lg text-sm md:text-lg lg:text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
            children={
              <div className="flex items-center" onClick={toggleShowPassword}>
                {showPassword ? (
                  <LuEye className="absolute right-5 text-gray-300 cursor-pointer" />
                ) : (
                  <LuEyeOff className="absolute right-5 text-gray-300 cursor-pointer" />
                )}
              </div>
            }
          />

          <ButtonSection title={`${isLoading ? "Loading..." : "Sign In"}`} />
        </div>
      </form>
    </div>
  );
};

InputSection.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputSection;
