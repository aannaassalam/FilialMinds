import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import carousal1 from "../assets/Caraousel1.jpg";
import carousal2 from "../assets/Caraousel2.jpg";
import carousal3 from "../assets/Caraousel3.jpg";

function GameCarousel() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-[600px] w-full">
        <img
          src={carousal1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-6xl"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img
          src={carousal2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] w-full">
        <img
          src={carousal3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default GameCarousel;
