import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import FloatLabel from "../components/FloatLabel";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
  const { setToken, setAccess, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setToken(response.data.token);
      setAccess(response.data.access);
      setUser(response.data.userID);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("user", response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    // <div>
    //   {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       placeholder="Username"
    //     />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
    <>
      <div className="w-screen h-screen bg-[#E0FBFD] flex flex-row">
        <div className="w-[40%] h-full flex justify-center items-center">
          <div className="w-[80%] h-[70%] bg-[#fff] border-2 rounded-lg bg-opacity-80 flex flex-col items-center justify-evenly">
            <div className="w-[90%] h-[17.5%] font-mono text-4xl font-bold flex items-center">
              Hi, Login to Exam
            </div>
            <div className="w-full h-[22%]">
              <FloatLabel label="Username" name="username" value={username}>
                <input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="w-[90%] h-2/5 border-2 rounded-lg focus:outline-none"
                />
              </FloatLabel>
            </div>
            <div className="w-full h-[22%]">
              <FloatLabel label="Password" name="password" value={password}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-[90%] h-2/5 border-2 rounded-lg focus:outline-none"
                />
              </FloatLabel>
            </div>
            <div className="w-full h-[35%] flex flex-col items-center justify-evenly">
              <div className="w-[90%] h-[20%]">
                <button
                  className="w-full h-full bg-[#2196F3] text-white rounded-lg"
                  onClick={(e) => {
                    // console.log("try");
                    handleSubmit(e);
                  }}
                >
                  Login
                </button>
              </div>
              <div className="w-[90%] h-[20%] text-center text-blue-400 cursor-pointer">
                Forgot Password
              </div>
              {errorMessage && (
                <div className="text-red-400">{errorMessage}</div>
              )}{" "}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full flex justify-center items-center">
          <div className="w-[95%] h-[95%] bg-[#2196F3] rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
