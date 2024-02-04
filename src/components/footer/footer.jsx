import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <div className=" bg-[#d4c3f280] text-black">
      <div className="flex justify-evenly py-10">
        <div className="w-[400px]">
          <div className="text-3xl  font-bold mb-4">
            <img src={logo} alt="" style={{ mixBlendMode: "darken" }} />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            quisquam obcaecati rem. Aliquid hic quia ad maiores est earum
            excepturi, saepe .
          </p>
          <div className="flex gap-4 py-2">
            <FaFacebookF className="text-3xl cursor-pointer w-3" />
            <FaInstagram className="text-3xl cursor-pointer w-5" />
            <FaXTwitter className="text-3xl cursor-pointer w-5" />
          </div>
        </div>
        <div className="flex">
          <div className="w-[300px] text-lg">
            <h4 className="text-2xl font-semibold mb-4">Company</h4>
            <p>
              <a href="/">About Us</a>
            </p>
            <p>
              <a href="/">Blogs</a>
            </p>
            <p>
              <a href="/">Services</a>
            </p>
            <p>
              <a href="/">FAQ's</a>
            </p>
          </div>
          <div className="w-[300px]  text-lg">
            <h4 className="text-2xl font-semibold mb-4">Legal</h4>
            <p>
              <a href="/">Terms of use</a>
            </p>
            <p>
              <a href="/">License agreement</a>
            </p>
            <p>
              <a href="/">Privacy policy</a>
            </p>
            <p>
              <a href="/">Cookies policy</a>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500"></div>
      <div className="text-center text-lg py-4">
        Copyrights © by Growthwiz. All rights reserved.
      </div>
    </div>
  );
}
