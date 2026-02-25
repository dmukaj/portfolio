import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="w-full">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="heading mb-10 w-[80vw]">
          Let’s Build Something
          <span className="text-blue-700"> Meaningful </span>
          Together
        </h1>
        <p className="text-sm md:text-lg lg:text-xl dark:text-white text-black px-4">
          Reach me out and let discuss how I can help your team.
        </p>
        <Link href="mailto:dajanacepele@gmail.com">
          <Button title="Let's Get In Touch" icon={<FaLocationArrow />} />
        </Link>
      </div>
      <div className="flex my-10 items-center justify-center gap-6">
        <p className="lg:text-base text-sm lg:font-semibold font-light flex place-content-center">
          Copyright © 2026 Dajana Mukaj
        </p>
        <div className="flex items-center gap-2 place-content-center text-black dark:text-white">
          <FaInstagram size={24} />
          <CiLinkedin size={24} />
          <FaGithub size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
