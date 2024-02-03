import React from "react";
import { useState } from "react";
import { Input } from "antd";

const Para = ({ question, content }) => {
  const [value, setValue] = useState("");
  const { TextArea } = Input;

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
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Start Typing"
              autoSize={{
                minRows: 5,
                maxRows: 8,
              }}
              className="basis-3/5 mt-10 text-lg bg-white border-2 border-grey-300 hover:border-white focus:bg-white focus:border-yellow-400"
            />
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

export default Para;
