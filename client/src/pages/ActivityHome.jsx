import React from "react";
import Activity from "../assets/activityActive.json";
import { Button } from "antd";

const ActivityHome = () => {
  const activityCategory = "activity";
  return (
    <div className=" h-full py-10 pt-24 flex flex-col gap-10 bg-gray-100">
      <div className="w-fit mx-auto px-1 py-1 flex gap-2 rounded-xl shadow-md bg-custY">
        <button
          className={
            activityCategory === "activity"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-yellow-50 hover:bg-white"
              : "w-28 px-3 py-2 rounded-lg hover:bg-yellow-200 transition-all"
          }
        >
          Activity
        </button>
        <button
          className={
            activityCategory === "games"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-yellow-50 hover:bg-white"
              : "w-28 px-3 py-2 rounded-lg hover:bg-yellow-200 transition-all"
          }
        >
          Games
        </button>
        <button
          className={
            activityCategory === "stories"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-yellow-50 hover:bg-white"
              : "w-28 px-3 py-2 rounded-lg hover:bg-yellow-200 transition-all"
          }
        >
          Stories
        </button>
      </div>

      <div className="rounded-3xl grid grid-cols-4 gap-10 mx-20 p-10 shadow-xl bg-white">
        {activityCategory === "activity" &&
          Activity.active.map((e) => (
            <button className="flex flex-col p-6 gap-4 items-center rounded-2xl shadow-md shadow-gray-400 bg-custV text-custL text-xl itali hover:-translate-y-4 hover:scale-105 hover:shadow-lg hover:shadow-gray-400 transition-all italic">
              <img
                src={e.img}
                alt=""
                className="rounded-xl h-60 w-60 object-cover"
              />
              {e.title}
            </button>
          ))}
        {activityCategory === "games" &&
          Activity.active.map((name) => (
            <button className="px-3 py-4 rounded-lg shadow-md bg-custV text-custL">
              {name}
            </button>
          ))}
        {activityCategory === "stories" &&
          Activity.active.map((name) => (
            <button className="px-3 py-4 rounded-lg shadow-md bg-custV text-custL">
              {name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ActivityHome;
