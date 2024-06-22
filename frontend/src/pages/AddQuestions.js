import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";

const AddQuestions = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-screen h-screen bg-[#E0FBFD] flex justify-evenly items-center">
      <Navbar user={user} />
      <div className="w-[83%] h-[98%]">
        
      </div>
    </div>
  );
};

export default AddQuestions;
