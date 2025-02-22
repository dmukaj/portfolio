import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBoarder";

const Experiences = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="heading mb-20">
        My <span className="text-purple ">Skills</span>
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex items-center bg-gray-300 dark:bg-slate-900/[0.8] text-black dark:text-white dark:border-slate-800 p-4">
              <div className="flex flex-col gap-4">
                <p className=" lg:text-xl md:text-lg text-sm font-semibold">
                  {item.title}
                </p>
                <p className="lg:text-lg md:text-sm text-xs dark:text-white-200 w-[80vw]">
                  {item.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
