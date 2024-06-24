import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full mb-20 ">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="heading mb-10">
          Ready to take your website to{" "}
          <span className="text-purple"> another level?</span>
        </h1>
        <p>
          Reach me out and let discuss how I can help you achieve your goals.
        </p>
        <Link href="mailto:dajanacepele@gmail.com">
          <Button title="Let's get in touch" icon={<FaLocationArrow />} />
        </Link>
      </div>
      <div className="flex my-10 lg:flex-row flex-col justify-between items-center">
        <p className="lg:text-base text-sm lg:font-semibold font-light">
          Copyright © 2024 Dajana Mukaj
        </p>
        <div className="flex items-center space-x-5">
          {socialMedia.map((item) => (
            <div key={item.id} className="w-7 h-7 flex ">
              <img src={item.img} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
