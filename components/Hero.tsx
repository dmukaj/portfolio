import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";
import { ModeToggle } from "./ThemeToggle";

const Hero = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="">
        <Spotlight
          className="h-[90vh] w-[80vw] -top-50 left-50"
          fill="purple"
        />
        <Spotlight className="top-28 left-60 h-[90vh] w-[60vw]" fill="blue" />
        <Spotlight
          className="-bottom-20 -left-50 h-[90vh] w-[90vw]"
          fill="red"
        />
      </div>
      <div className="flex justify-center items-center relative z-10 h-screen">
        <ModeToggle />
        <div className="max-w-[89vw] lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="text-lg lg:text-xl xl:text-2xl uppercase tracking-widest text-center max-w-80">
            Dajana&apos;s Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-2xl md:text-4xl lg:text-6xl"
            words="Building Scalable, High-Performance Applications with Precision and Innovation in Next.js and React. 🚀"
          />
          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I am Dajana Mukaj, a developer based in Ohio, USA.
          </p>

          <a href="#about">
            <Button title="Show my work" icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
