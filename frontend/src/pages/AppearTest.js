import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";
const AppearTest = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("f(x) = \\frac{x}{2}");
  const [questionset, setQuestionset] = useState([]);
  return (
    <>
      <div className="w-screen h-screen bg-[#E0FBFD] flex justify-evenly items-center">
        <Navbar user={user} />
        <div className="w-[83%] h-[98%] flex flex-col items-center justify-evenly">
          <div className="w-[98%] h-[10%] text-3xl text-opacity-20 font-extrabold flex justify-start items-center opacity-70">
            Add Questions
          </div>
          <div className="w-[98%] h-[88%] rounded-lg bg-white flex justify-evenly items-center bg-opacity-50 border-2">
            <div className="w-[48%] h-[98%] bg-white rounded-xl border-r-2">
              <input type="textbox" />
            </div>
            <div className="w-[48%] h-[98%]">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppearTest;
