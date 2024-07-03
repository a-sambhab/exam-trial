import axios from "axios";
import React from "react";

const QuestionPreview = (props) => {
  const uploadQuestions = async () => {
    if (window.confirm("Upload all Questions")) {
      const response = await axios.post("http://localhost:3001/addquestions", {
        questions: props.questionset,
      });
      if (response.status === 200) {
        alert("All Questions Uploaded Successfully");
        props.setQuestionset([]);
      }
    }
  };
  return (
    <>
      <div className="w-[48%] h-[98%] bg-white rounded-xl border-l-2 flex flex-col justify-evenly items-center overflow-auto">
        {props.questionset.map((ques, i) => {
          console.log(ques);
          return (
            <>
              <div className="w-full h-[40%] border-2 flex flex-col items-center justify-evenly">
                <div className="w-full h-[30%] flex justify-evenly items-center">
                  <div className="w-[5%]">{i + 1}.</div>
                  <div className="w-[93%]">{ques.question}</div>
                </div>
                <div className="w-full h-[35%] flex justify-evenly items-center ">
                  {ques.media != [] ? (
                    <>
                      {ques.media.map((m) => {
                        return <img className="w-1/4 h-full" src={m} />;
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="w-full h-[20%] flex justify-evenly items-center flex-wrap">
                  {ques.option.map((o) => {
                    if (o !== ques.answer) {
                      return (
                        <div className="w-[48%] h-[48%] bg-blue-400 bg-opacity-40 rounded-xl text-center">
                          {o}
                        </div>
                      );
                    } else {
                      return (
                        <div className="w-[48%] h-[48%] bg-green-400 bg-opacity-100 rounded-xl text-center">
                          {o}
                        </div>
                      );
                    }
                  })}
                </div>
                <div className="w-full h-[10%] flex justify-evenly items-center">
                  <div className="w-1/3 text-center">
                    Standard: {ques.standard}
                  </div>
                  <div className="w-1/3 text-center">Topic: {ques.topic}</div>
                  <div className="w-1/3 text-center">Marks: {ques.marks}</div>
                </div>
              </div>
            </>
          );
        })}
        <div className="w-full h-[5%] flex justify-evenly items-center">
          <button
            className="w-1/2 h-full bg-blue-600 bg-opacity-20 border-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-opacity-10"
            onClick={() => {
              console.log("extrcyvubnj");
              uploadQuestions();
            }}
          >
            Add All Questions
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionPreview;
