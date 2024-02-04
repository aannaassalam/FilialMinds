import React, { useState } from "react";

const Audio = ({ question, content, mainDesc }) => {
  const [value, setValue] = useState("");

  return (
    <>
      {content.id === question && (
        <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
          <div className="flex flex-col gap-2">
            <h1 className="-mb-1 text-yellow-400">
              Read the task carefully and answer the questions:
            </h1>
            <h1 className="mb-4 text-yellow-400 text-sm italic font-medium">
              {mainDesc}
            </h1>
            <h1 className="text-yellow-400 text-xl font-bold">{content.id}</h1>
            <h1 className="text-yellow-400 text-2xl">{content.desc}</h1>
          </div>
          <div
            className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20"
            // onChange={updateOption}
          >
            <button className="w-28 px-3 py-2 rounded-lg shadow-md bg-white">
              Upload Audio
            </button>
            <img
              src={content.img}
              alt=""
              className=" basis-2/5 w-10 object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Audio;
