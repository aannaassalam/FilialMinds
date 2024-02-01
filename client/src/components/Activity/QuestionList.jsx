import React from "react";

const QuestionList = ({ question, setQuestion, questionData }) => {
  return (
    <div className="fixed top-0 right-0 w-1/5 pt-16 px-10 pl-0 h-screen">
      <div className="flex flex-col justify-center h-full gap-4 text-black">
        {questionData.content.map((content) => (
          <button
            onClick={() => setQuestion(content.id)}
            className={
              question === content.id
                ? "rounded-lg px-3 py-2 shadow-md bg-yellow-500"
                : "rounded-lg px-3 py-2 shadow-md bg-white"
            }
          >
            {content.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
