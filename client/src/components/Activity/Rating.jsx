import { Content } from "antd/es/layout/layout";
import { Rate } from "antd";
import React, { useState } from "react";
const Rating = ({ question, content }) => {
  const [value, setValue] = useState(0);
  const desc = ["Terrible", "Bad", "Normal", "Good", "Great"];

  return (
    // content?.id === question && (
    //   <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
    //     <h1 className="text-yellow-400 text-xl font-bold">{content?.id}</h1>
    //     <h1 className="text-yellow-400 text-2xl">{content?.desc}</h1>
    // <div
    //   className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20"
    // >
    // <Rate
    //   tooltips={desc}
    //   onChange={setValue}
    //   value={value}
    //   style={{
    //     margin: 10,
    //   }}
    // />
    //       <img
    //         src={content?.img}
    //         alt=""
    //         className=" basis-2/5 w-10 object-cover"
    //       />
    //     </div>
    //   </div>
    content?.id === question && (
      <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
        <h1 className="text-yellow-400 text-xl font-bold">{content.id}</h1>
        <h1>{content.desc}</h1>
        {console.log(content.img)}
        <div className="basis-1/2 w-full my-4 px-10 flex justify-between gap-20">
          <Rate
            tooltips={desc}
            onChange={setValue}
            value={value}
            style={{
              margin: 10,
            }}
          />
          <img
            src={content.img}
            alt=""
            className=" basis-2/5 w-10 object-cover"
          />
        </div>
      </div>
    )
  );
};

export default Rating;
