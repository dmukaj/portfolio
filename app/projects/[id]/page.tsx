"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion, useTime, useTransform } from "framer-motion";

const Page: React.FC = () => {
  const params = useParams<{ id?: string }>();
  const item = projects.find((p) => p.id === Number(params.id));

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff9900, #ff00ff, #0000ff, #00ffcc, #ff9900)`;
  });

  if (!item) return <div className="p-6">Project not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-black dark:text-white"
      >
        <FaArrowLeft size={20} />
        <span>Back To Resume</span>
      </Link>

      <div className="relative w-full max-w-5xl">
        <div className="relative z-10 rounded-2xl border border-neutral-200 bg-gray-100 p-6 text-black shadow-sm dark:border-slate-800 dark:bg-black-100 dark:text-white">
          {/* Side-by-side layout */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            {/* Image column */}

            <div className="relative lg:w-[38%] h-[500px] md:h-[620px] rounded-xl border border-neutral-200 dark:border-slate-800 bg-white dark:bg-black flex items-center justify-center">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-fill p-2"
                priority
              />
            </div>

            {/* Text column */}
            <div className="w-full md:w-[60%]">
              <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl bg-gradient-to-tr from-red-500 to-blue-500 text-transparent bg-clip-text">
                {item.title}
              </h1>

              <h2 className="mt-2 text-base md:text-lg lg:text-xl">
                {item.subTitle}
              </h2>

              <p className="mt-4 text-sm leading-relaxed md:text-base lg:text-lg">
                {item.longDes}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.http && (
                  <a
                    href={item.http}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-white/10"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* animated border glow */}
        <motion.div
          className="absolute -inset-1.5 rounded-2xl"
          style={{
            background: rotatingBg,
            filter: "blur(12px)",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
