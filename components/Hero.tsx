import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center items-center relative my-20 z-10 h-screen">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="text-sm lg:text-lg uppercase tracking-widest text-center max-w-80">
            Dajana's Portfolio
          </h2>
          <TextGenerateEffect
            className="text-center text-2xl md:text-4xl lg:text-6xl"
            words="Transforming Concepts into Real Experiance with Next.js and React"
          />
          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I am Dajana Mukaj, a frontend developer based in Ohio, USA.
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
