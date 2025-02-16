import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBoarder";

const Experiences = () => {
  return (
    <div>
      <h1 className="heading mb-20">
        My <span className="text-purple ">Skills</span>
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 ">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex items-center text-white border-neutral-200 dark:border-slate-800 p-4">
              <div className="flex flex-col gap-4">
                <p className=" lg:text-xl md:text-lg text-sm font-semibold">
                  {item.title}
                </p>
                <p className="lg:text-lg md:text-sm text-xs text-white-200">
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
