"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { Button } from "../../../components/ui/MovingBoarder";

const Page: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const item = projects.find((item) => item.id === Number(params.id)); // Find the item by ID

  if (!item) {
    return <div>Project not found</div>;
  }

  return (
    <div
      className="bg-black-100 h-screen flex justify-center items-center bg-no-repeat bg-cover"
      //   style={{ backgroundImage: `url(${item.spareImg})` }}
    >
      <Button
        key={item.id}
        duration={Math.floor(Math.random() * 10000 + 10000)}
      >
        <div className="flex flex-col items-center text-white border-neutral-200 dark:border-slate-800 p-4 h-[50vh] w-[80vw] sm:w-[70dvw] md:w-[50dvw] rounded-xl gap-y-10">
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
              className="text-blue-500 underline mr-4 text-xs lg:text-sm"
            >
              Live Demo
            </a>
            <a
              href={item.link}
              target="_blank"
              className="text-blue-500 underline text-xs lg:text-sm"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Page;
