import React from "react";
import { useState } from "react";
import { Button } from "antd";

import ChildInfo from "../components/ChildInfo";
import ChildSkill from "../components/ChildSkill";

const ChildForm = () => {
  const [page, setPage] = useState(1);
  const [input1, setInput1] = useState({}); // holds the first page input values
  const [input2, setInput2] = useState({}); // holds the second page input values

  return (
    <>
      <div className="h-full w-screen text-black flex justify-center">
        <img
          className="absolute w-screen -z-10"
          src="/sakura-2446572_1280.jpg"
          alt=""
        />
        {page ? (
          <ChildInfo page={page} setPage={setPage} setInput1={setInput1} />
        ) : (
          <ChildSkill page={page} setPage={setPage} setInput2={setInput2} />
        )}
      </div>
      {/* <Button
        type="primary"
        onClick={() => {
          console.log(input1);
          console.log(input2);
        }}
        className="bg-blue-600"
      >
        Back
      </Button> */}
    </>
  );
};

export default ChildForm;
