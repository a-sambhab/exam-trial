import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const NewQuestion = (props) => {
  //   const [value, setValue] = useState("f(x) = \\frac{x}{2}");
  const [standard, setstandard] = useState("12th");
  const [topic, setTopic] = useState("Physics");
  const [marks, setMarks] = useState(0);
  const [answer, setAnswer] = useState("");
  const [options, setoptions] = useState([]);
  const [media, setMedia] = useState([]);
  const [question, setQuestion] = useState("");
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
  const addQuestions = () => {
    props.setQuestionset([
      ...props.questionset,
      {
        question: question,
        option: options,
        media: media,
        answer: answer,
        topic: topic,
        standard: standard,
        marks: marks,
        creator: props.user,
      },
    ]);
    setQuestion("");
    setoptions([]);
    setMedia([]);
    setAnswer("");
    setTopic("");
    setstandard("");
    setMarks(0);
  };
  return (
    <>
      <div className="w-[48%] h-[98%] bg-white rounded-xl border-r-2 flex flex-col justify-evenly items-center">
        <div className="w-2/3 h-[20%] flex flex-col items-start justify-evenly">
          <label>Question</label>
          <textarea
            className="border-2 w-full h-full"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
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
        <div>
          <label>Answer</label>
          <select
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          >
            {options.map((o) => {
              return (
                <>
                  <option value={o}>{o}</option>
                </>
              );
            })}
          </select>
        </div>
        <div className="w-full h-[20%] flex flex-col items-center justify-evenly">
          <label>Media Files</label>
          {media.length !== 0 ? (
            <>
              <div className="w-full h-[50%] flex justify-evenly items-center overflow-auto">
                {media.map((m) => {
                  console.log(m);
                  return (
                    <>
                      <img className="w-1/4 h-full" src={m} alt="media" />
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
        <div className="w-full h-[10%] flex justify-evenly items-center">
          <div className="w-1/3 flex justify-evenly items-center">
            <label>Class</label>
            <select
              value={standard}
              onChange={(e) => {
                setstandard(e.target.value);
              }}
            >
              <option value="12th">12th</option>
              <option value="11th">11th</option>
              <option value="10th">10th</option>
              <option value="9th">9th</option>
              <option value="8th">8th</option>
            </select>
          </div>
          <div className="w-1/3 flex justify-evenly items-center">
            <label>Class</label>
            <select
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            >
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
            </select>
          </div>
          <div className="w-1/3 flex justify-evenly items-center">
            <label>Marks</label>
            <input
              className="w-[50%]"
              type="number"
              value={marks}
              onChange={(e) => {
                setMarks(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <button
          className="w-1/2 bg-black bg-opacity-20 border-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-opacity-5"
          onClick={() => {
            addQuestions();
          }}
        >
          Add Question
        </button>
      </div>
    </>
  );
};

export default NewQuestion;
