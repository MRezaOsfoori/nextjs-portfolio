import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="  h-screen py-16 m-10 flex items-center justify-center md:grid grid-col-2">
      <div className="md:col-span2">
        <h2 className="p-4 text-blue-800 py-4">About</h2>
        <p className="text-gray-500 p-2">
          I`m a front end developer with one years of experience in web
          development. I`m passionate about creating great user experiences and
          have a strong understanding of usability and accessibility standards.
          I have a master`s degree in civil engineering from Amir kabir
          University of Technology, Tehran. Conducting the thesis based on
          software modeling and using OpenSEES programming language in it led to
          my interest in working in the field of programming. I have learned the
          knowledge of programming languages such as JavaScript, React and
          Next-JS by participating in programming classes. My engineering
          background has facilitated the acquisition of problem solving skills
          that are widely used in web development projects.
        </p>
      </div>
      <div className=" hidden md:flex mx-auto  w-[50%] h-[300px]">
        <Image
          className=""
          src="/../public/assets/about.jpg"
          alt="/"
          width="1000"
          height="200"
        ></Image>
      </div>
    </div>
  );
};

export default About;
