import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogIn(props) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const navigate = useNavigate();

  async function Login() {
    if (userName && password) {
      await axios
        .post(`${process.env.REACT_APP_API_KEY}/login`, {
          userName: userName,
          password: password,
        })
        .then(function (response) {
          const { token, user } = response.data;
          navigate("/");
          localStorage.setItem("token", token);
          localStorage.setItem("userObject", JSON.stringify(user));
        })
        .catch(function (error) {});
    }
  }

  return (
    <div className="bg-[#3E334E] p-10 pt-16 lg:h-[100vh] sm:px-20 md:px-[14rem] lg:px-[23rem] lg:pt-[5rem] xl:px-[30rem]">
      <form className="px-12 py-8 pb-0 border-[1px] border-b-0 bg-white rounded-t-lg">
        <p
          htmlFor=""
          className="block text-3xl font-semibold text-[#3E334E] pt-4"
        >
          Log In
        </p>
        <br />
        <p className="text-[#3E334E]">User Name</p>
        <input
          type="userName"
          name="userName"
          id="userName"
          className="w-full border-2 py-2 px-3 rounded border-[#3E334E] placeholder:text-[#3E334E]"
          placeholder="Enter User Name"
          required
          onChange={handleChangeUserName}
        />
        <p className="text-[#3E334E] pt-4">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full border-2 py-2 px-3 rounded border-[#3E334E] placeholder:text-[#3E334E]"
          placeholder="Enter Password"
          required
          onChange={handleChangePassword}
        />
        <button
          type={"button"}
          onClick={() => {
            Login();
          }}
          className="mt-8 py-2 w-full text-center text-white bg-[#3E334E] rounded text-[0.9rem]"
        >
          Log In
        </button>
      </form>
      <div className="bg-white text-center pb-4 rounded-b-lg px-8">
        <div className="text-right pr-4 pt-4 cursor-pointer">
          <Link to="" className="text-center text-[#3E334E]">
            Forgot Password?
          </Link>
        </div>
        <p className="mt-4">Or, login with</p>
        <div className="mx-4 mt-4 flex justify-around">
          <button className="py-[0.375rem] text-center w-full border border-[#3E334E] text-[#3E334E] rounded cursor-pointer">
            Google
          </button>
          <button className="mx-4 py-[0.375rem] text-center w-full border border-[#3E334E] text-[#3E334E] rounded cursor-pointer">
            Linked In
          </button>
          <button className="py-[0.375rem] text-center w-full border border-[#3E334E] text-[#3E334E] rounded cursor-pointer">
            Facebook
          </button>
        </div>
        <p className="mt-4">
          Need an account?{" "}
          <Link to="/signUp" className="text-[#3E334E]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
