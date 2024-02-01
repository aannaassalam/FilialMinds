import React from 'react'
import activityTitle from "../../assets/activityActive.json";

console.log(activityTitle);

const ActivityLink = ({ title }) => {
  return (
    <div className="w-full px-10 py-4 flex gap-4">
      {activityTitle.active.map((name) => (
        <h1
          className={
            name === title
              ? "text-base px-3 py-2 rounded-lg shadow-md bg-red-500"
              : "text-base px-3 py-2 rounded-lg shadow-md bg-yellow-500"
          }
        >
          {name}
        </h1>
      ))}
    </div>
  );
};

export default ActivityLink