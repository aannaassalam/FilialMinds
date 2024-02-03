import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ActivityLink from "../components/Activity/ActivityLink";
import QuestionList from "../components/Activity/QuestionList";
import Mcq from "../components/Activity/Mcq";
import Para from "../components/Activity/Para";
import questionData from "../assets/questionData.json";

console.log(questionData);

const Activity = () => {
  const [question, setQuestion] = useState("Question 1");
  const location = useLocation();
  const title = "Emotional Reactivity";
  return (
    <>
      <div className=" mt-16 flex bg-gray-200 text-black">
        <div className="w-full flex flex-col">
          <ActivityLink title={title} />
          <div className="w-4/5 bg-gray-200">
            <h1 className="mx-10 my-4 text-4xl text-black">
              {questionData.title}
            </h1>
            {questionData.content.map((content) => {
              if (content.type === "mcq") {
                return <Mcq question={question} content={content} />;
              } else if (content.type === "para") {
                return <Para question={question} content={content} />;
              } else {
              }
            })}
          </div>
        </div>
        <QuestionList
          question={question}
          setQuestion={setQuestion}
          questionData={questionData}
        />
      </div>
    </>
  );
};

export default Activity;
