import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";

const AddQuestions = () => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("f(x) = \\frac{x}{2}");
  const [questionset, setQuestionset] = useState([]);
  const [options, setoptions] = useState([]);
  return (
    <>
      <div className="w-screen h-screen bg-[#E0FBFD] flex justify-evenly items-center">
        <Navbar user={user} />
        <div className="w-[83%] h-[98%] flex flex-col items-center justify-evenly">
          <div className="w-[98%] h-[10%] text-3xl text-opacity-20 font-extrabold flex justify-start items-center opacity-70">
            Add Questions
          </div>
          <div className="w-[98%] h-[88%] rounded-lg bg-white flex justify-evenly items-center bg-opacity-50 border-2">
            <div className="w-[48%] h-[98%] bg-white rounded-xl border-r-2 flex flex-col justify-evenly items-center">
              <div className="w-2/3 h-[20%] flex flex-col items-start justify-evenly">
                <label>Question</label>
                <textarea className="border-2 w-full h-full" />
              </div>
              {options.map((o, i) => {
                return (
                  <>
                    <div className="w-[98%] h-[8%] flex items-center justify-evenly">
                      <label>Option {i + 1}</label>
                      <input
                        value={options[i]}
                        onChange={(e) => {
                          var copy = [...options];
                          copy[i] = e.target.value;
                          setoptions(copy);
                        }}
                        className="border-2 w-[60%] h-full"
                      />
                    </div>
                  </>
                );
              })}
              <button
                onClick={() => {
                  setoptions([...options, ""]);
                }}
                className="w-1/2 bg-black bg-opacity-20 border-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-opacity-5"
              >
                Add Option
              </button>
              <input type="file" />
            </div>
            <div className="w-[48%] h-[98%]">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestions;
