import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <>
      <div className=" fixed w-full h-[100px] shodow-lg shadow-green-400  z-[100]  bg-gray-100 ">
        <div className="flex items-center justify-between w-full  h-full px-2 2xl:px-16">
        <Image
            className="m-4 rounded-full"
            src="/../public/assets/navLogoo.jpg"
            alt="/"
            width="100"
            height="50"
          ></Image>

          <div>
            <ul className="hidden md:flex ">
              <Link href="/">
                <li className="ml-10 uppercase text-sm hover:border-b ">
                  home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 uppercase text-sm hover:border-b ">
                  about{" "}
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 uppercase text-sm hover:border-b ">
                  skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 uppercase text-sm hover:border-b ">
                  projects
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 uppercase text-sm hover:border-b ">
                  contact
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div
          className={
            nav
              ? " fixed top-0 left-0 h-screen w-full flex bg-black/70 ease-out duration-300"
              : "  fixed left-[-200%] top-0 ease-in duration-300"
          }
        >
          <div className="bg-[#ecf0f3]  top-0 left-0 w-[75%]  sm:w-[65%] md:w-[45%] h-full p-4">
            <div className=" ">
              <div className="flex justify-between w-full items-center">
                <Image
                  className="m-5 rounded-full"
                  src="/../public/assets/navLogo.jpg"
                  alt="/"
                  width="100"
                  height="50"
                ></Image>
                <div
                  className="rounded-full cursor-pointer mr-5 p-3 shadow-gray-400 shadow-lg bg-gray-100  hover:bg-gray-400 "
                  onClick={handleNav}
                >
                  <AiOutlineClose />
                </div>
              </div>

              <p className="pl-5  my-5 text-xl border-b">
                {" "}
                Let the cobbler to his{" "}
                <span className="text-blue-800">job</span>{" "}
              </p>

              <div className="pl-5">
                <ul className="py-4 ">
                  <Link href="/">
                    <li className="ml-2 my-5 uppercase text-sm hover:border-b ">
                      home
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="ml-2 my-5 uppercase text-sm hover:border-b ">
                      about{" "}
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="ml-2 my-5 uppercase text-sm hover:border-b ">
                      skills
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="ml-2 my-5 uppercase text-sm hover:border-b ">
                      projects
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="ml-2 my-5 uppercase text-sm hover:border-b ">
                      contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div>
                <p className="text-blue-800 text-xl pl-5">Contact withe me</p>
                <div className="ml-5 flex my-4 items-center justify-between w-[75%]">
                  <div className="m-2 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div className="m-2 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <FaGithub size={20} />
                  </div>
                  <div className="m-2 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <BsFillPersonLinesFill size={20} />
                  </div>
                  <div className="m-2 shadow-gray-400 shodow-lg hover:bg-gray-400 cursor-pointer rounded-full ">
                    <AiOutlineMail size={20} />
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

export default Navbar;
