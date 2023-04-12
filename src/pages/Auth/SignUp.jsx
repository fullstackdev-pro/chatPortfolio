import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp(props) {
  // Password validation
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("focus:ring focus:outline-none focus:ring-green-400");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("focus:ring focus:outline-none focus:ring-red-400");
      }
    }
  }, [cPassword, password, isCPasswordDirty]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  //server
  const [userName, setUsername] = useState("");

  const handleChangeUserName = (event) => {
    setUsername(event.target.value);
  };

  const navigate = useNavigate();

  async function Register() {
    if (userName && password && password === cPassword) {
      await axios
        .post(`${process.env.REACT_APP_API_KEY}/register`, {
          username: userName,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          navigate("/login");
        })
        .catch(function (error) {
          console.log(error.response.data);
          // toast.warning(error.response.data.message)
          navigate("/signup");
        });
    }
  }

  return (
    <div className="bg-[#3E334E] lg:h-[100vh] p-10 pt-[4.5rem] sm:px-40 md:px-[16rem] lg:px-[23rem] lg:pt-[4rem] xl:px-[30rem] xl:pt-[4.5rem]">
      <form className="p-8 pb-0 border-[1px] border-b-0 bg-white rounded-t-lg">
        <p htmlFor="" className="block text-center text-3xl font-semibold">
          Sign Up
        </p>
        <br />
        <p className="text-[#3E334E]">User Name</p>
        <input
          type="text"
          name="username"
          id="username"
          className="w-full border-2 py-2 px-3 rounded border-[#3E334E] placeholder:text-[#3E334E]"
          placeholder="Enter Username"
          required
          onChange={handleChangeUserName}
        />
        <p className="text-[#3E334E] mt-6">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          className="w-full border-2 py-2 px-3 rounded border-[#3E334E] placeholder:text-[#3E334E]"
          placeholder="Enter Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="text-[#3E334E] mt-6">Confirm password</p>
        <input
          type="password"
          name="cpassword"
          id="confirmPassword"
          value={cPassword}
          className={`w-full border-2 py-2 px-3 rounded border-[#3E334E] placeholder:text-[#3E334E] ${cPasswordClass}`}
          placeholder="Confirm Password"
          required
          onChange={handleCPassword}
        />
        {/* Input validate message */}
        {showErrorMessage && isCPasswordDirty ? (
          <div> Passwords did not match </div>
        ) : (
          ""
        )}
        <button
          type={"button"}
          className="mt-8 py-2 w-full text-center text-white text-[0.85rem] bg-[#3E334E] rounded-[4px] cursor-pointer"
          onClick={() => {
            Register();
          }}
        >
          Sign Up
        </button>
      </form>
      <div className="bg-white text-center pb-4 rounded-b-lg px-8">
        <p className="py-4">Or, login with</p>
        <div className="mt-0 flex justify-around">
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
          Already a user?{" "}
          <Link to="/" className="text-[#3E334E]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
