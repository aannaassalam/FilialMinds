import React, { useState } from "react";
import "./homefaq.css";
import line from "../../assets/underline.svg";
import { Container } from "@mui/material";

const data = [
  {
    key: 1,
    title: "Question 1 ?",
    data: `Answer 1.`,
    isOpen: false,
  },
  {
    key: 2,
    title: "Question 2 ?",
    data: `Answer 2 `,
    isOpen: false,
  },
  {
    key: 3,
    title: "Question 3 ?",
    data: `Answer 3 `,
    isOpen: false,
  },
];

const Section = ({ question, answer, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="w-[100%] bg-[#664dd4] px-5 py-2  mx-auto cursor-pointer transition ease-out duration-500">
        <div
          onClick={() => setIsVisible(!isVisible)}
          className="flex justify-between"
        >
          <div className="text-xl font-medium text-white">{question}</div>
          {isVisible ? (
            <div className="text-3xl" style={{ color: "#f6d26f" }}>
              -
            </div>
          ) : (
            <div className="text-2xl" style={{ color: "#f6d26f" }}>
              +
            </div>
          )}
        </div>
        <div className="w-[88%] text-md text-white">
          {isVisible && <p>{answer}</p>}
        </div>
      </div>
      <div
        className="w-[100%] mx-auto h-[1px]"
        style={{ backgroundColor: "#aaa" }}
      ></div>
    </>
  );
};

export default function Homefaq() {
  const [visibleSection, setVisibleSection] = useState(null);
  return (
    <Container fixed>
      <div
        className="my-28"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3
          className="text-5xl text-center font-bold"
          style={{
            fontFamily: `'Protest Riot', sans-serif`,
            color: "#333",
          }}
        >
          Frequently Asked{" "}
          <h3
            className="text-5xl text-center font-bold"
            style={{
              display: "inline",
              fontFamily: `'Protest Riot', sans-serif`,
              color: "#664dd4",
            }}
          >
            Questions
          </h3>
        </h3>
        <img
          src={line}
          alt=""
          style={{
            height: "20px",
            alignSelf: "center",
            objectFit: "contain",
            marginLeft: "350px",
            marginTop: "-5px",
            marginBottom: "40px",
          }}
        />

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            width: "1000px",
            alignSelf: "center",
          }}
        >
          {data.map((section) => (
            <Section
              key={section.key}
              question={section.title}
              answer={section.data}
              isVisible={visibleSection === section.key}
              setIsVisible={() =>
                setVisibleSection(
                  visibleSection === section.key ? null : section.key
                )
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
