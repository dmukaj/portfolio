"use client";

import { cn } from "@/lib/utils/cn";
import Lottie from "lottie-react";
import animationData from "@/data/confetti.json";
import { useState } from "react";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

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
      )}
    >
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
  img?: string;
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
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="h-full w-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={350}
              height={200}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5  dark:bg-black bg-gray-300 text-black dark:text-white "
          )}
        >
          <div className="font-sans font-normal text-black text-sm md:text-lg xl:text-xl dark:text-neutral-300 mb-3">
            {title}
          </div>
          <div className="font-sans font-light dark:text-gray-400 text-black text-xs md:text-sm lg:text-md xl:ext-lg z-10 ">
            {description}
          </div>

          {id === 5 && (
            <div className="flex gap-1 w-1/3 absolute md:right-0 -right-20 bottom-10 lg:gap-5 lg:right-1 sm:">
              <div className="flex flex-col gap-3 lg:gap-6 w-[120px] ">
                {["React", "CSS", "Javascript", "Python", "MongoDb"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-[#10132e] text-white py-2 lg:py-4 px-2 text-[10px] md:text-sm lg:text-base opacity-60 rounded-lg text-center"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col gap-3 lg:gap-6 w-[120px] ">
                {["Nextjs", "React Native", "Docker", "Git", "Typescript"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-[#10132e] text-white py-2 lg:py-4 px-2 text-[10px] md:text-sm lg:text-base opacity-60 rounded-lg text-center"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 `}>
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
