"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-16"
      id="projects"
    >
      <h1 className="heading text-center">
        Check Out My <span className="text-blue-700"> Projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-4">
        {projects.map((item) => (
          <div
            className=" p-6 relative w-full max-w-xl  bg-gray-300 text-black rounded-2xl flex flex-col dark:bg-slate-900/[0.8] dark:text-white"
            key={item.id}
          >
            <div className="relative flex items-center justify-center w-full h-[200px] mb-6">
              <Image
                src={item.img}
                alt="cover"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                className="rounded-lg"
              />
            </div>

            <h1 className="font-bold  text-lg sm:text-xl md:text-2xl line-clamp-1">
              {item.title}
            </h1>

            <Link href={`/projects/${item.id}`} className="block mt-2">
              <p className="dark:text-gray-400 text-sm sm:text-base line-clamp-2 dark:hover:text-white hover:text-blue-700">
                {item.des}
              </p>
            </Link>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center space-x-2">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full dark:bg-black bg-gray-400 w-8 h-8 flex justify-center items-center"
                  >
                    <Image
                      src={icon}
                      alt="icon"
                      width={24}
                      height={24}
                      className="p-1"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <Link
                  className="text-blue-700 text-xs lg:text-sm font-medium"
                  target="_blank"
                  href={item.link}
                >
                  Check My GitHub
                </Link>
                <FaLocationArrow className="ml-2 text-blue-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
