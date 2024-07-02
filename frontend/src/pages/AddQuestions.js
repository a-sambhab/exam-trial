import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import NewQuestion from "../components/NewQuestion";
import QuestionPreview from "../components/QuestionPreview";

const AddQuestions = () => {
  const { user } = useContext(AuthContext);
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
            <NewQuestion
              questionset={questionset}
              setQuestionset={setQuestionset}
              user={user}
            />
            <QuestionPreview
              questionset={questionset}
              user={user}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestions;
