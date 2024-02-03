import React from "react";
import Activity from "../assets/activityActive.json";
import { Button } from "antd";

const ActivityHome = () => {
  const activityCategory = "activity";
  return (
    <div className=" h-screen py-10 pt-24 flex flex-col gap-10 text-black bg-gray-100">
      <div className="w-fit mx-auto px-1 py-1 flex gap-2 rounded-xl shadow-md bg-gray-300">
        <button
          className={
            activityCategory === "activity"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-white"
              : "w-28 px-3 py-2 rounded-lg"
          }
        >
          Activity
        </button>
        <button
          className={
            activityCategory === "games"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-white"
              : "w-28 px-3 py-2 rounded-lg"
          }
        >
          Games
        </button>
        <button
          className={
            activityCategory === "stories"
              ? "w-28 px-3 py-2 rounded-lg shadow-md bg-white"
              : "w-28 px-3 py-2 rounded-lg"
          }
        >
          Stories
        </button>
      </div>

      <div className="rounded-3xl grid grid-cols-4 gap-10 mx-20 p-10 shadow-xl bg-white">
        {activityCategory === "activity" &&
          Activity.active.map((name) => (
            <button className="px-3 py-4 rounded-lg shadow-md bg-gray-300">
              {name}
            </button>
          ))}
        {activityCategory === "games" &&
          Activity.active.map((name) => (
            <button className="px-3 py-4 rounded-lg shadow-md bg-gray-300">
              {name}
            </button>
          ))}
        {activityCategory === "stories" &&
          Activity.active.map((name) => (
            <button className="px-3 py-4 rounded-lg shadow-md bg-gray-300">
              {name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ActivityHome;
