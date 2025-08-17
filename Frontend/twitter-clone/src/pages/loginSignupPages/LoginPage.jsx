import { useNavigate } from "react-router-dom";
import logo from "..//../assets/logo.jpg";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const signUpHandler = () => {
    navigate("/signup");
  };

  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({...inputData, email:"", password:""});
  };

  return (
    <div className="bg-[#000000] w-full h-full text-white">
      <div className="flex w-full h-full">
        <div className="flex w-[60%] justify-center items-center">
          <img className="w-[50%]" src={logo} alt="" />
        </div>

        <div className="w-[40%] h-[80%] flex items-center">
          <div className="w-full">
            <div className="mb-7">
              <h1 className="text-7xl mb-7 font-serif">Happening now</h1>
              <h2 className="text-3xl font-serif">Join today.</h2>
            </div>

            <form action="" className="w-full" onSubmit={formHandler}>
              <input
                type="email"
                className="p-2 w-[50%] rounded-full bg-[#ffffff] text-black border-none mb-3"
                placeholder="Email"
                name="email"
                value={inputData.email}
                onChange={inputHandler}
                required
              />
              <br />
              <input
                type="password"
                className="p-2 w-[50%] rounded-full bg-[#ffffff] text-black border-none"
                placeholder="Password"
                value={inputData.password}
                name="password"
                onChange={inputHandler}
                required
              />
              <br />
              <button className="bg-[#1d9bf0] rounded-xl w-[50%] p-2 font-semibold text-xs mt-5">
                Login
              </button>
            </form>

            <div className="flex w-[50%] items-center mt-3">
              <div className="text-gray-500">________________</div>
              <div>OR</div>
              <div className="text-gray-500">________________</div>
            </div>

            <div className="w-[50%] flex justify-center mt-6">
              <button
                onClick={() => signUpHandler()}
                className="bg-[#1d9bf0] rounded-xl w-full p-2 font-semibold text-xs"
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
