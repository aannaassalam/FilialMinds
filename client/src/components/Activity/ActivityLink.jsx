import React from "react";
import activityTitle from "../../assets/activityActive.json";

console.log(activityTitle);

const ActivityLink = ({ title }) => {
  return (
    <div className="w-full px-10 pt-8 pb-4 flex flex-wrap gap-5">
      {activityTitle.active.map((e) => (
        <h1
          className={
            e.title === title
              ? "text-base px-3 py-2 rounded-lg shadow-md  bg-custV border-2 border-custV text-custL hover:shadow-md hover:shadow-gray-300 hover:border-2 hover:-translate-y-1 transition-all cursor-pointer"
              : "text-base px-3 py-2 rounded-lg shadow-md shadow-gray-200 bg-white text-custV border-2 border-custV hover:shadow-md hover:shadow-gray-300 hover:-translate-y-1 transition-all cursor-pointer"
          }
        >
          {e.title}
        </h1>
      ))}
    </div>
  );
};

export default ActivityLink;
