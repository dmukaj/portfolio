"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="mb-40">
      <h1 className="heading">
        Check out my <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 mt-20 gap-x-20 gap-y-28">
        {projects.map((item) => (
          <div
            className="lg:h-[40rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div className=" w-[80vw] h-[32rem] bg-black rounded-2xl p-4">
              <Link
                href={item.link}
                className="relative flex items-center justify-center sm:w-96  overflow-hidden h-[20vh] mb-10 "
              >
                <Image src={item.img} alt="cover" width={350} height={200} />
              </Link>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        className="p-2"
                        width={400}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    className="flex lg:text-lg md:text-xs text-sm text-purple z-50"
                    target="_blank"
                    href="https://github.com/dmukaj"
                  >
                    Check My GitHub
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
