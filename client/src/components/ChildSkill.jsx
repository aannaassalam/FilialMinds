import React, { useState } from "react";
import { Rate } from "antd";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Select } from "antd";

// Skills Dropdown Dictionary
const skills = [
  {
    value: "cooking",
    label: "Cooking",
  },
  {
    value: "drawing",
    label: "Drawing",
  },
  {
    value: "singing",
    label: "Singing",
  },
];

// Rating Scales
const desc = ["Terrible", "Bad", "Normal", "Good", "Expert"];

// function for dropdown value change
const onChange = (value) => {
  console.log(`selected ${value}`);
};

// function for dropdown search
const onSearch = (value) => {
  console.log("search:", value);
};

// function for dropdown filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const ChildSkill = ({ page, setPage }) => {
  const [addSkill, setAddSkill] = useState([<Skill />]);

  const add = () => {
    setAddSkill(addSkill.concat(<Skill />));
  };

  return (
    <div className="px-10 my-10 py-10 w-1/2 flex flex-col gap-y-10 items-center rounded-3xl shadow-2xl shadow-black bg-white">
      <h1 className="mb-4">Child Skills</h1>
      {addSkill}
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" size="medium" onClick={add}>
          + Add Skill
        </Button>
      </Box>
      <Box sx={{ "& button": { m: 1 } }}>
        <div className="grid grid-cols-6 gap-4">
          <Button
            variant="contained"
            size="medium"
            onClick={() => setPage(!page)}
            className=" col-start-1 col-span-2"
          >
            Back
          </Button>
          <Button
            variant="contained"
            size="medium"
            className=" col-start-7 col-span-2"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

const Skill = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="grid grid-cols-2 gap-10">
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={skills}
      />
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </div>
  );
};

export default ChildSkill;
