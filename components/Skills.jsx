import React from "react";
import Image from "next/image";
const SkillsList = [
  { imgSrc: "/../public/assets/skills/html.png", name: "html" },
  { imgSrc: "/../public/assets/skills/css.png", name: "css" },
  { imgSrc: "/../public/assets/skills/tailwind.png", name: "TailWind" },
  { imgSrc: "/../public/assets/skills/javascript.png", name: "javacript" },
  { imgSrc: "/../public/assets/skills/react.png", name: "react" },
  { imgSrc: "/../public/assets/skills/nextjs.png", name: "next js" },
  { imgSrc: "/../public/assets/skills/github.png", name: "github" },
];

const Skills = () => {
  return (
    <div className="w-full-h-screen py-16 ">
      <div className="p-4 w-[90%] flex flex-col items-center mx-auto">
        <div>
          <h1>Skills</h1>
        </div>
        <div className="w-auto  grid grid-col grid-cols-4  items-center">
        {SkillsList.map((skill) => {
          return (
            <>
              <div className=" col-span-4 sm:col-span-2 md:col-span-1 shadow-2xl shadow-stone-500 m-4 rounded  ">
                <div>
                  <Image
                    className="m-4"
                    src={skill.imgSrc}
                    alt="/"
                    width="125"
                    height="50"
                  ></Image>
                </div>
                <div>
                  <p className="text-center uppercase text-xl font-bold mt-5"> {skill.name}</p>
                </div>
              </div>
            </>
          );
        })}
        </div>

        
      </div>
    </div>
  );
};

export default Skills;
