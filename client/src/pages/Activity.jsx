import React from "react";
import { useState } from "react";

const Activity = () => {
  const [gender, setGender] = useState("Male");
  const updateGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div className="flex bg-gray-200 text-black">
        <div className="basis-1/6 bg-gray-200"></div>
        <div className="basis-5/6 flex flex-col">
          <div className="w-full px-10 py-4 flex gap-4">
            <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-yellow-500">
              Emotional Reactivity
            </h1>
            <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-yellow-500">
              Logical Reasoning
            </h1>
            <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-yellow-500">
              Aptitude
            </h1>
            <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-yellow-500">
              Killing Instinct
            </h1>
          </div>
          <div className="flex">
            <div className="basis-4/5 bg-gray-200">
              <h1 className="mx-10 my-4 text-4xl text-black">
                Emotional Reactivity
              </h1>
              <div className="mx-10 my-4 p-10 shadow-lg rounded-2xl bg-white">
                <h1 className="text-yellow-400 text-xl font-bold">
                  Question 1
                </h1>
                <h1 className="text-yellow-400 text-2xl">
                  Do you like going to school?
                </h1>
                <div
                  className="basis-1/2 w-full my-4 px-10 flex justify-between gap-4"
                  onChange={updateGender}
                >
                  <div className="flex flex-col gap-4 text-black">
                    <div className="relative rounded-lg w-fit">
                      <input
                        className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={gender === "Male"}
                      />
                      <div className="flex justify-evenly gap-2 rounded-lg bg-gray-300 peer-checked:bg-yellow-500">
                        <h1 className="text-lg ml-3 my-2 bg-white text-black px-2 rounded-md">
                          A
                        </h1>
                        <h1 className="text-lg mr-3 my-2">Yes</h1>
                      </div>
                    </div>
                    <div className="relative rounded-lg w-fit">
                      <input
                        className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={gender === "Male"}
                      />
                      <div className="flex justify-evenly gap-2 rounded-lg bg-gray-300 peer-checked:bg-yellow-500">
                        <h1 className="text-lg ml-3 my-2 bg-white text-black px-2 rounded-md">
                          B
                        </h1>
                        <h1 className="text-lg mr-3 my-2">Sometimes</h1>
                      </div>
                    </div>
                    <div className="relative rounded-lg w-fit">
                      <input
                        className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={gender === "Male"}
                      />
                      <div className="flex justify-evenly gap-2 rounded-lg bg-gray-300 peer-checked:bg-yellow-500">
                        <h1 className="text-lg ml-3 my-2 bg-white text-black px-2 rounded-md">
                          C
                        </h1>
                        <h1 className="text-lg mr-3 my-2">No</h1>
                      </div>
                    </div>
                  </div>

                  <img
                    src="/activity/high-school-concept-illustration.png"
                    alt=""
                    className=" basis-1/2 w-10 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/5 p-10 pl-0 bg-gray-200 h-screen">
              <div className="flex flex-col gap-4 text-black">
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 1
                  </h1>
                </div>
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 2
                  </h1>
                </div>
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 3
                  </h1>
                </div>
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 4
                  </h1>
                </div>
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 5
                  </h1>
                </div>
                <div className="relative rounded-lg w-full">
                  <input
                    className="absolute m-0 h-full w-full z-10 opacity-0 cursor-pointer peer"
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === "Male"}
                  />
                  <h1 className="text-base px-3 py-2 rounded-lg shadow-md bg-white peer-checked:bg-yellow-500">
                    Question 6
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
