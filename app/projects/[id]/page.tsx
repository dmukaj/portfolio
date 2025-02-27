"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { Button } from "../../../components/ui/MovingBoarder";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion, useTime, useTransform } from "framer-motion";

const Page: React.FC = () => {
  const params = useParams<{ id?: string }>();

  const item = projects.find((item) => item.id === Number(params.id));
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff9900, #ff00ff, #0000ff, #00ffcc, #ff9900)`;
  });

  if (!item) {
    return <div>Project not found</div>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        href="/"
        className="absolute top-10 left-10 flex justify-center items-center gap-x-2 text-black dark:text-white"
      >
        <FaArrowLeft size={24} />
        <span>Back To Resume</span>
      </Link>
      <div className="relative">
        <div className="relative flex flex-col items-center text-black dark:text-white border-neutral-200 dark:bg-black-100 bg-gray-100 dark:border-slate-800 p-4 h-[50vh] w-[80vw] sm:w-[70dvw] md:w-[50dvw] rounded-xl gap-y-10 z-10">
          <h1 className="flex place-content-center text-lg md:text-3xl lg:text-4xl xl:text-4xl font-bold bg-gradient-to-tr from-red-500 to-blue-500 text-transparent bg-clip-text ">
            {item.title}
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl">{item.subTitle}</h2>
          <p className="text-sm md:text-md lg:text-lg">{item.longDes}</p>

          <div className="flex gap-1 mt-4 items-center justify-center">
            {item.iconLists.map((icon, index) => (
              <Image key={index} src={icon} alt="icon" width={20} height={20} />
            ))}
          </div>

          <div className="mt-4">
            <a
              href={item.http}
              target="_blank"
              className="text-blue-500 underline mr-4 text-xs md:text-sm"
            >
              Live Demo
            </a>
            <a
              href={item.link}
              target="_blank"
              className="text-blue-500 underline text-xs md:text-sm"
            >
              GitHub Repo
            </a>
          </div>
        </div>
        <motion.div
          className="absolute p-4 rounded-xl -inset-1.5"
          style={{
            background: rotatingBg,
            filter: `blur(10px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Page;
