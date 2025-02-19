import React from "react";
import { testimonials } from "@/data/index";

const AboutMe = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1 className="heading mb-20">
        More <span className="text-purple ">About Me</span>
      </h1>
      <div className="w-[90vw] overflow-hidden relative">
        {/* Sliding container */}
        <div className="flex gap-6 px-4 card-container">
          {extendedTestimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center about-card w-full lg:w-[30vw] bg-black h-48 lg:h-80 text-white rounded-xl p-4 shrink-0 gap-2"
            >
              <h2 className="lg:text-xl md:text-lg text-sm font-semibold">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm xl:text-lg text-gray-400">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
