import React from "react";

const Button = ({
  title,
  icon,
  handleClick,
  otherClasses,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
}) => {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple rounded-lg" />
      <div
        className={` flex items-center gap-2 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}
      >
        {title} {icon}
      </div>
    </button>
  );
};

export default Button;
