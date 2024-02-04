import { Container, Stack } from "@mui/material";
import React from "react";
import line from "../../assets/underline.svg";
import "./homeoffer.css";

const data = [
  {
    key: 1,
    title: "Learning Dimensions",
    description:
      "Gain insights into your child's thinking style & child developmental stages.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    key: 2,
    title: "Child Analysis",
    description:
      "Gain insights into your child's thinking style & child developmental stages.",
    icon: "fa-solid fa-chart-simple",
  },
  {
    key: 3,
    title: "Parent Analysis",
    description:
      "Gain insights into your child's thinking style & child developmental stages.",
    icon: "fa-solid fa-chart-pie",
  },
];

const HomeOffers = () => {
  return (
    <div className=" p-20 pb-10">
      <Container fixed>
        <Stack direction="column">
          <h3
            className="text-5xl text-center font-bold"
            style={{
              fontFamily: `'Protest Riot', sans-serif`,
              color: "#333",
            }}
          >
            Limitless{" "}
            <h3
              className="text-5xl text-center font-bold"
              style={{
                display: "inline",
                fontFamily: `'Protest Riot', sans-serif`,
                color: "#664dd4",
              }}
            >
              possibilities
            </h3>{" "}
            for your child
          </h3>
          <img
            src={line}
            alt=""
            style={{
              height: "20px",
              objectFit: "contain",
              marginLeft: "-50px",
            }}
          />
          {/* <h3
            className="text-2xl text-center text-700 font-semibold py-4"
            style={{ color: "#121212" }}
          >
            
          </h3> */}
          <p
            className="text-center text-gray-400 mt-3 mb-5"
            style={{ width: "60%", alignSelf: "center", fontSize: "14px" }}
          >
            Put together by expert psychologists & talent advisors, your child’s
            talent discovery report provides you with life-transforming insights
            into your child. Here’s what the 16+ page report reveals:
          </p>

          <div className="flex items-center py-10 gap-4">
            {data.map((item) => (
              <div
                key={item.key}
                className="flex-1 shadow-[0px_6px_24px_0px_##000000c05]-[0px_0px_0px_1px_00000014] p-5 py-5 pb-5 w-96 card"
              >
                <div className="card_icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-[#fff] font-medium text-3xl mb-3 card_text">
                  {item.title}
                </h3>
                <p className="font-normal text-md card_subtitle">
                  {item.description}
                </p>
              </div>
            ))}
            {/* <div>
                <img src="/HomePageImages/photo1.png" alt="" className='w-10 mb-5' />
                <h3 className='text-[#0cc1e0] font-bold text-lg'>Learning Dimensions</h3>
                <p className='font-semibold text-lg'>Gain insights into your child's thinking style & child developmental stages.</p>
            </div> */}
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default HomeOffers;
