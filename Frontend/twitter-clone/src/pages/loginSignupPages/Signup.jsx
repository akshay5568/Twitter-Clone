import { useState } from "react";
import logo from "..//../assets/logo.jpg";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Signup() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const HandlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/api/auth/signup`,
        inputData
      );
      if (response.status == 200 || response.status == 201) {
        setInputData({ ...inputData, name: "", email: "", password: "" });
        toast.success("User Registerd Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      else{
        toast.error("User Already Exist")
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  return (
    <div className="w-full h-full bg-[#242d35] flex justify-center items-center text-white">
      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 left-5 bg-red-400 rounded-full text-2xl"
      >
        <RxCross2 />
      </button>
      <div className="sm:w-[40%] sm:h-[80%] max-sm:w-full bg-black rounded-xl px-20">
        <img className="w-[50px] m-auto mt-3" src={logo} alt="" />
        <h1 className="text-2xl mt-7">Create your account</h1>
        <div className="w-full">
          <form action="" className="m-auto mt-5" onSubmit={HandlerFormSubmit}>
            <input
              type="text"
              className="w-full p-5 border-1 border-gray-700 rounded text-xl"
              placeholder="Name"
              value={inputData.name}
              name="name"
              onChange={inputHandler}
            />
            <br />
            <input
              type="email"
              className="w-full p-5 mt-6 border-1  border-gray-700 rounded text-xl"
              placeholder="Email"
              value={inputData.email}
              name="email"
              onChange={inputHandler}
            />
            <input
              type="password"
              className="w-full p-5 mt-6 border-1  border-gray-700 rounded text-xl"
              placeholder="Password"
              value={inputData.password}
              name="password"
              onChange={inputHandler}
            />
            <div className="mt-5">
              <h4 className="font-semibold">Date of birth</h4>
              <p className="text-gray-600 text-xs mt-2">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </div>
            <input
              type="date"
              className="w-full mt-6 p-5 text-xl border-1  border-gray-700 rounded"
            />
            <button className="w-full bg-white p-3 rounded-full mt-15 text-black font-semibold">
              Next
            </button>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
