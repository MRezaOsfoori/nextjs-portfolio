import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <>
      <div className=" w-full h-screen text-center ">
        <div className="  max-w-[1240px] w-full h-full mx-auto my-auto p-2 flex justify-center items-center ">
          <div>
            <div className="flex flex-col items-center ">
              <div className="">
                <Image
                  className="p-1 rounded-full"
                  src="/../public/assets/mrezaa.JPG"
                  alt="/"
                  width="150"
                  height="100"
                ></Image>
              </div>
              <div>
                <h2>
                  Hi,My name is{" "}
                  <span className="text-blue-800">MReza Osfoori</span>
                </h2>
                <h2>A Front-End Developer</h2>
                <p className="mx-20">
                  {" "}
                  I,m a front end developer with one years of experience in web
                  development. I,m passionate about creating great user
                  experiences and have a strong understanding of usability and
                  accessibility standards.{" "}
                </p>
              </div>
              <div className="w-full flex justify-center items-center mt-3">
                <div className="mx-auto flex my-4 items-center justify-between w-[45%]">
                  <div className=" border-b p-3 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <FaLinkedinIn size={30} />
                  </div>
                  <div className="border-b p-3 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <FaGithub size={30} />
                  </div>
                  <div className="border-b p-3 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <BsFillPersonLinesFill size={30} />
                  </div>
                  <div className="border-b p-3 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <AiOutlineMail size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
