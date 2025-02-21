"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-4 right-2 text-black dark:text-white ">
      {theme && theme === "dark" ? (
        <FaMoon
          className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] transition-all rotate-90 dark:rotate-0"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaSun
          className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] rotate-0 transition-all dark:-rotate-90 "
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
