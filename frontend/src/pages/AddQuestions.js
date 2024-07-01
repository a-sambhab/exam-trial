import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const AddQuestions = () => {
  const { user } = useContext(AuthContext);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dgy8ybeoy",
    },
  });
  const [value, setValue] = useState("f(x) = \\frac{x}{2}");
  const [standard, setstandard] = useState("12th");
  const [questionset, setQuestionset] = useState([]);
  const [options, setoptions] = useState([]);
  const [media, setMedia] = useState([]);
  const uploadImages = async (e) => {
    const url = "https://api.cloudinary.com/v1_1/dgy8ybeoy/image/upload";
    const files = document.querySelector("[type=file]").files;
    // console.log(files)
    let arr = [];
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "test-trial");
      const response = await axios.post(url, formData);
      arr.push(response.data.secure_url);
    }
    setMedia([...media, ...arr]);
  };
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
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => {
                          setoptions((options) =>
                            options.filter((o, id) => id !== i)
                          );
                        }}
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
              <div className="w-full h-[20%] flex flex-col items-center justify-evenly">
                <label>Media Files</label>
                {media.length !== 0 ? (
                  <>
                    <div className="w-full h-[50%] flex justify-evenly items-center overflow-auto">
                      {media.map((m) => {
                        console.log(m);
                        return (
                          <>
                            <img className="w-1/4 h-full" src={m} />
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  ""
                )}
                <input type="file" multiple />
                <button
                  className="w-1/2 bg-black bg-opacity-20 border-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-opacity-5"
                  onClick={(e) => {
                    uploadImages(e);
                  }}
                >
                  Upload Media
                </button>
              </div>
              <div className="w-full">
                  <label>Class</label>
                <select value={standard} onChange={(e)=>{setstandard(e.target.value)}}>
                  <option value="12th">12th</option>
                  <option value="11th">11th</option>
                  <option value="10th">10th</option>
                  <option value="9th">9th</option>
                  <option value="8th">8th</option>
                </select>
              </div>
            </div>
            <div className="w-[48%] h-[98%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestions;
