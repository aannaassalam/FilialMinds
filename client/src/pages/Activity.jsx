import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ActivityLink from "../components/Activity/ActivityLink";
import QuestionList from "../components/Activity/QuestionList";
import Mcq from "../components/Activity/Mcq";
import Para from "../components/Activity/Para";
import Img from "../components/Activity/Img";
import Time from "../components/Activity/Time";
import Rating from "../components/Activity/Rating";
import questionData from "../assets/natureCollage.json";

console.log(questionData);

const Activity = () => {
  const [question, setQuestion] = useState(questionData.content[0].id);
  const [content_selected, setContent_selected] = useState(
    questionData.content[0]
  );
  const location = useLocation();
  const title = "Emotional Reactivity";

  const renderOptions = (content) => {
    console.log(content.type);
    switch (content.type) {
      case "mcq":
        return <Mcq question={question} content={content} />;
      case "textbox":
        return <Para question={question} content={content} />;
      case "img":
        return <Img question={question} content={content} />;
      case "time":
        return <Time question={question} content={content} />;
      case "rate":
        return <Rating question={question} content={content} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" mt-16 flex bg-gray-200 text-black">
        <div className="w-full flex flex-col">
          <ActivityLink title={title} />
          <div className="w-4/5 bg-gray-200">
            <h1 className="mx-10 my-4 text-4xl">{questionData.title}</h1>
            {renderOptions(content_selected)}
          </div>
        </div>
        <QuestionList
          question={question}
          setQuestion={(content) => {
            setQuestion(content.id);
            setContent_selected(content);
          }}
          questionData={questionData}
        />
      </div>
    </>
  );
};

export default Activity;
