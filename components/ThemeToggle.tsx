"use client";
import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils/cn";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      suppressHydrationWarning
      className={cn(
        "absolute top-4 right-2 text-black dark:text-white",
        className
      )}
    >
      {mounted && resolvedTheme && resolvedTheme === "dark" ? (
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
