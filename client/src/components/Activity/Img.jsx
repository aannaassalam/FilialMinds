import React, { useState } from "react";

const Img = ({ question, content }) => {
  const [value, setValue] = useState("");

  return (
    <>
      {content.id === question && (
        <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
          <h1 className="text-yellow-400 text-xl font-bold">{content.id}</h1>
          <h1 className="text-yellow-400 text-2xl">{content.desc}</h1>
          <div
            className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20"
            // onChange={updateOption}
          >
            <button className="w-28 px-3 py-2 rounded-lg shadow-md bg-white">
              Upload Image
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

export default Img;
