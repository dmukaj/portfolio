"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils/cn";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  if (!resolvedTheme) return null;

  return (
    <div
      className={cn(
        "absolute top-4 right-2 text-black dark:text-white",
        className
      )}
    >
      {resolvedTheme && resolvedTheme === "dark" ? (
        <FaMoon
          className="w-[1rem] h-[1rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem] animate-fadeIn transition-transform"
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaSun
          className="w-[1rem] h-[1rem] sm:h-[1.5rem] sm:w-[1.5rem] md:h-[2rem] md:w-[2rem] animate-spinSlow transition-transform "
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
