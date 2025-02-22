"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  if (!resolvedTheme) return null;

  return (
    <div className="absolute top-4 right-2 text-black dark:text-white ">
      {resolvedTheme && resolvedTheme === "dark" ? (
        <FaMoon
          className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] animate-fadeIn transition-transform"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaSun
          className="h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] animate-spinSlow transition-transform "
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
