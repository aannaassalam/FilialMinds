import React from "react";
import { IoMdAdd } from "react-icons/io";
import child1 from "../assets/childProfile1.jpg";
import doctor from "../assets/doctor.jpg";

const data = [
  {
    key: 1,
    name: "Atul",
    img: child1,
  },
  {
    key: 2,
    name: "Tanmoy",
    img: doctor,
  },
];

const ManageChild = () => {
  return (
    <div>
      <p className="text-3xl mb-5">Manage Children</p>
      <div className="flex gap-10 p-5 border-4 border-[#664dd4] rounded-xl">
        {data.map((item) => (
          <div key={item.key}>
            <img src={item.img} alt="" className="w-32 h-32 object-cover" />
            <p className="text-2xl text-center">{item.name}</p>
          </div>
        ))}

        <div>
          <IoMdAdd
            className="block cursor-pointer"
            style={{ width: "128px", height: "128px", color: "gray" }}
          />
          <p className="text-2xl text-center">Atul</p>
        </div>
      </div>
    </div>
  );
};

export default ManageChild;
