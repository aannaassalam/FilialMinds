import React from "react";
import { MdTableChart } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import spiral from "../assets/Spiral.png";
import spiralLight from "../assets/SpiralLight.png";

const ChildExplore = () => {
  return (
    <div>
      <p className="text-2xl font-semibold mb-4">Explore more</p>
      <div className="flex gap-20 mb-8">
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
            src={spiral}
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
            src={spiralLight}
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
            src={spiralLight}
            alt=""
            className="w-40  absolute -top-[50px] -right-16"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(242deg) brightness(102%) contrast(102%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChildExplore;
