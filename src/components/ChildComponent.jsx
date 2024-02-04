import React from "react";
import { MdTableChart } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import child from "../assets/childProfile1.jpg";

const profileData = [
  {
    key: 1,
    title: "Name",
    value: "Atul Sourabh",
  },
  {
    key: 2,
    title: "Age",
    value: [7, 4],
  },
  {
    key: 3,
    title: "Gender",
    value: "Male",
  },
  {
    key: 4,
    title: "Daily Activity",
    value: "Done",
  },
];

const ChildComponent = () => {
  return (
    <div className="my-12">
      <p className="text-3xl mb-5">Children</p>
      <div className="relative border-2 border-black p-8 rounded-xl">
        <div className="absolute top-0 right-0">
          <button className="bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2">
            View Details
          </button>
          <button className="bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2">
            Activity
          </button>
        </div>

        <div className="absolute bottom-0 right-0">
          <button className="bg-blue-600 rounded-3xl text-white font-semibold m-4  px-5 py-2">
            Download Report
          </button>
        </div>

        <div className="flex items-center gap-20">
          <img
            src={child}
            alt=""
            className="w-32 h-32 rounded-[50%] object-cover"
          />
          {profileData.map((item) => (
            <div className="text-center" key={item.key}>
              <p className="text-lg font-medium ">{item.title}</p>
              <p className="text-2xl font-semibold">
                {item.title === "Age"
                  ? `${item.value[0]} years ${item.value[1]} months`
                  : `${item.value}`}
              </p>
            </div>
          ))}

          {/* <div className='text-center'>
                        <p className='text-lg font-medium '>Age</p>
                        <p className='text-2xl font-semibold'>7 years 4 months</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-lg font-medium '>Gender</p>
                        <p className='text-2xl font-semibold'>Male</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-lg font-medium '>Daily Task</p>
                        <p className='text-2xl font-semibold'>Done/Not Done</p>
                    </div> */}
        </div>

        <div className="flex gap-40 items-center my-8">
          <div className="flex items-center">
            <img
              src="/ParentDashboardImages/doctor.jpg"
              alt=""
              className="w-16 h-16 rounded-[50%] object-cover inline ml-5 mr-10"
            />
            <p className="inline text-xl font-semibold">Dr. Abhishek Singhal</p>
          </div>

          <div className="text-xl font-semibold">
            Next Appointment : 5th Feb, 2024
          </div>
        </div>

        <div className="flex gap-20">
          <div className="relative w-[25%] rounded-3xl bg-[#d4c3f2] overflow-hidden p-5">
            <div className="p-3 bg-[#e9e3f2] w-[50px] text-center rounded-full mb-6">
              <MdTableChart className="text-2xl " />
            </div>
            <p className=" font-semibold text-2xl mb-4">
              Creative<br></br>
              <span className="italic ">Activities</span>
            </p>
            <p className=" font-medium text-lg">
              Discover enjoyable activities such as coloring, crafting, and
              science.
            </p>
            <img
              src="/Doodles/Spiral.png"
              alt=""
              className="w-40  absolute -top-[50px] -right-16"
            />
          </div>

          <div className="relative w-[25%] rounded-3xl bg-[#664dd4] overflow-hidden p-5">
            <div className="p-3 bg-[#c2b8ec] w-[50px] text-center rounded-full mb-6">
              <FaGamepad className="text-2xl " />
            </div>
            <p className=" font-semibold text-2xl mb-4 text-white">
              Fun<br></br>
              <span className="italic ">Games</span>
            </p>
            <p className=" font-medium text-lg text-white">
              Discover enjoyable activities such as coloring, crafting, and
              science.
            </p>
            <img
              src="/Doodles/SpiralLight.png"
              alt=""
              className="w-40  absolute -top-[50px] -right-16"
            />
          </div>

          <div className="relative w-[25%] rounded-3xl bg-[#f6d26f] overflow-hidden p-5">
            <div className="p-3 bg-[#e9ddbd] w-[50px] text-center rounded-full mb-6">
              <FaBookDead className="text-2xl " />
            </div>
            <p className=" font-semibold text-2xl mb-4 ">
              Interesting<br></br>
              <span className="italic ">Stories</span>
            </p>
            <p className=" font-medium text-lg ">
              Discover enjoyable activities such as coloring, crafting, and
              science.
            </p>
            <img
              src="/Doodles/SpiralLight.png"
              alt=""
              className="w-40  absolute -top-[50px] -right-16"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg) brightness(102%) contrast(102%)",
              }}
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChildComponent;
