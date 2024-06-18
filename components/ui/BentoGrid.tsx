"use client";

import { cn } from "@/lib/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "lottie-react";
import { GlobeDemo } from "./GlobeGrid";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  img,
  title,
  description,
  imgClassName,
  spareImg,
  className,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: File | string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("Dajanacepele@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(115,53,167,1) 35%, rgba(0,212,255,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="h-full w-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div className={`absolute right-0 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover, object-center h-full w-full"
            />
          )}
          {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
            </BackgroundGradientAnimation>
          )}
        </div>
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:-10 "
          )}>
          <div className="font-sans font-normal text-neutral-600 text-lg dark:text-neutral-300">
            {title}
          </div>
          <div className="font-sans font-light text-[#6a6b83] text-sm lg:text-base z-10">
            {description}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 w-fit absolute -right-3 lg:gap-5 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {[
                  "React",
                  "React Native",
                  "Javascript",
                  "MongoDb",
                  "Docker",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-[#10132e] py-2 px-3 lg:py-4 text-sm lg:text-lg opacity-60 rounded-lg text-center">
                    {item}
                  </span>
                ))}
                <span className="bg-[#10132e] text-[#10132e] py-2 px-3 lg:py-4 text-sm lg:text-lg opacity-60 rounded-lg text-center">
                  .
                </span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="bg-[#10132e] text-[#10132e] py-2 px-3 lg:py-4 text-sm lg:text-lg opacity-60 rounded-lg text-center">
                  .
                </span>
                {["Nextjs", "Postman", "Mongo Db", "Docker", "Git"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-[#10132e] py-2 px-3 lg:py-4 text-sm lg:text-lg opacity-60 rounded-lg text-center">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative ">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
                <Button
                  title={copied ? "Email copied" : "Copy Email"}
                  icon={<IoCopyOutline />}
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
