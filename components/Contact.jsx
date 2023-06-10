import React from "react";
import { RiComputerFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="w-full  h-screen mt-40  ">
        <div className="flex flex-col mx-auto my-auto  w-[80%] h-auto bg-blue-900 opacity-90  m-2 sm:grid sm:grid-cols-2  ">
          <div className="col-span-2 sm:col-span-1   m-5">
            <p className="mb-4 tracking-widest text-white font-bold"> CONTACT</p>
            <h2 className=" text-white font-bold my-5"> Got a problem to solve?</h2>
            <p className="text-gray-200 my-5">
              Get your space suit ready and tell me your ideas to develop your
              dream application.
            </p>
            <p className="text-white text-underline font-bold my-5">
              mohammadreza.osfuri@gmail.com
            </p>
          </div>
          <div className=" mx-3 my-2   ">
            <div className="flex flex-col mb-2">
              <label className="text-white text-xl font-bold" for="first fo">Name :</label>
              <input className="h-12 rounded" type="text" id="name" />
            </div>
            <div className="flex flex-col mb-2 ">
              <label className="text-white text-xl font-bold" for="email">Email :</label>
              <input className="h-12 rounded" type="text" id="email" />
            </div>
            <div className="flex flex-col mb-2">
              <label className="text-white text-xl font-bold" for="message">Message :</label>
              <input className="h-24 rounded" type="text" id="message" />
            </div>
            <div>
              <div className="  w-full bg-white text-black text-xl font-bold flex items-center justify-center h-12 mt-4 rounded">
               Hit me Up
                <span className="ml-2">
                  <RiComputerFill />{" "}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
