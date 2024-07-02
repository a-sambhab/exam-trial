import React from "react";

const QuestionPreview = (props) => {
  return (
    <>
      <div className="w-[48%] h-[98%] bg-white rounded-xl border-l-2 flex flex-col justify-evenly items-center overflow-auto">
        {props.questionset.map((ques, i)=>{
            console.log(ques)
            return(
                <>
                    <div className="w-full h-[20%] border-2">
                    {i+1}
                        <div>{ques.question}</div>
                        <div>{ques.option.map(o=>{
                            return(
                                <div>{o}</div>
                            )
                        })}</div>
                        <div>{ques.answer}</div>
                        <div>{ques.media==[]?<>
                            {ques.media.map(m=>{
                                <img src={m}/>
                            })}
                        </>:<></>}</div>
                        <div>{ques.topic}</div>
                        <div>{ques.standard}</div>
                        <div>{ques.marks}</div>
                    </div>
                </>
            )
        })}
      </div>
    </>
  );
};

export default QuestionPreview;
