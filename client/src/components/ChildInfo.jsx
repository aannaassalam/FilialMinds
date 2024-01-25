import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Slider from "@mui/material/Slider";

import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "7",
  },
  {
    value: 7,
    label: "7",
  },
  {
    value: 8,
    label: "8",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const ChildInfo = ({page, setPage}) => {
  const [gender, setGender] = useState("Male");

  const updateGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="px-10 my-10 py-10 w-1/2 flex flex-col gap-y-10 items-center rounded-3xl shadow-2xl shadow-black bg-white">
      <h1 className="mb-4">Child's Details</h1>
      <div className="w-full flex justify-center" onChange={updateGender}>
        <div className="relative h-48 w-40 mx-10">
          <input
            className="absolute h-full w-full m-0 z-10 opacity-0 cursor-pointer peer"
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
          />
          <div className="flex flex-col items-center justify-center h-full border-4 rounded-2xl border-indigo-800 transition-all duration-300 ease-in-out peer-checked:bg-indigo-200 peer-checked:border-indigo-800 peer-checked:shadow-lg peer-checked:scale-105">
            <FcBusinessman className="text-9xl" />
            <h1 className="text-xl">Boy</h1>
          </div>
        </div>
        <div className="relative h-48 w-40 mx-10">
          <input
            className="absolute h-full w-full m-0 z-10 opacity-0 cursor-pointer peer"
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
          />
          <div className="flex flex-col items-center justify-center h-full border-4 rounded-2xl border-rose-500 transition-all duration-300 ease-in-out peer-checked:bg-rose-200 peer-checked:border-rose-500 peer-checked:shadow-lg peer-checked:scale-105">
            <FcBusinesswoman className="text-9xl" />
            <h1 className="text-xl">Girl</h1>
          </div>
        </div>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Date of Birth" />
        </DemoContainer>
      </LocalizationProvider>
      <div className="flex gap-6">
        <h1 className="text-xl">Grade</h1>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Grade"
            defaultValue={2}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={1}
            max={8}
          />
        </Box>
      </div>
      <Box sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" size="medium" onClick={() => setPage(!page)}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default ChildInfo;
