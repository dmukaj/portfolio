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
          Ready to take your website to
          <span className="text-purple"> another level?</span>
        </h1>
        <p className="text-sm md:text-lg lg:text-xl dark:text-white text-black px-4">
          Reach me out and let discuss how I can help you achieve your goals.
        </p>
        <Link href="mailto:dajanacepele@gmail.com">
          <Button title="Let's get in touch" icon={<FaLocationArrow />} />
        </Link>
      </div>
      <div className="flex my-10 items-center justify-center gap-6">
        <p className="lg:text-base text-sm lg:font-semibold font-light flex place-content-center">
          Copyright © 2024 Dajana Mukaj
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
