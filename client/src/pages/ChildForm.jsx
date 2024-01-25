import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import ChildInfo from "../components/ChildInfo";
import ChildSkill from "../components/ChildSkill";

const ChildForm = () => {
  const [page, setPage] = useState(1);

  const updatePage = () => {
    setPage(!page);
  };

  return (
    <>
      <div className="h-full w-screen text-black flex justify-center">
        <img
          className="absolute w-screen -z-10"
          src="/sakura-2446572_1280.jpg"
          alt=""
        />
        {page ? (
          <ChildInfo page={page} setPage={setPage} />
        ) : (
          <ChildSkill page={page} setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default ChildForm;
