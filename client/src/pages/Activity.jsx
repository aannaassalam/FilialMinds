import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ActivityLink from "../components/Activity/ActivityLink";
import QuestionList from "../components/Activity/QuestionList";
import Mcq from "../components/Activity/Mcq";
import Textbox from "../components/Activity/Textbox";
import No from "../components/Activity/No";
import Img from "../components/Activity/Img";
import Audio from "../components/Activity/Audio";
import Time from "../components/Activity/Time";
import Rating from "../components/Activity/Rating";
import questionData from "../assets/tasks/natureCollage.json";

console.log(questionData);

const Activity = () => {
  const [question, setQuestion] = useState(questionData.content[0].id);
  const [content_selected, setContent_selected] = useState(
    questionData.content[0]
  );
  const [ans, setAns] = useState(null);
  const location = useLocation();
  const title = "Create a Nature Collage";

  const renderOptions = (content) => {
    console.log(content.type);
    switch (content.type) {
      case "mcq":
        return (
          <Mcq
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "textbox":
        return (
          <Textbox
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "number":
        return (
          <No
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "img":
        return (
          <Img
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "audio":
        return (
          <Audio
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "time":
        return (
          <Time
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      case "rate":
        return (
          <Rating
            question={question}
            content={content}
            mainDesc={questionData.desc}
            ans={ans}
            setAns={setAns}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-16 flex bg-gray-100">
        <div className="w-full flex flex-col">
          <ActivityLink title={title} />
          <div className="flex">
            <div className="w-4/5">
              <h1 className="mx-10 my-4 text-4xl text-custV font-semibold">{questionData.title}</h1>
              {renderOptions(content_selected)}
            </div>
            <QuestionList
              question={question}
              setQuestion={(content) => {
                setQuestion(content.id);
                setContent_selected(content);
              }}
              ans={ans}
              setAns={setAns}
              questionData={questionData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
