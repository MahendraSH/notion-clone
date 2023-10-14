"use client";

import { useScrollTop } from "@/hooks/use-sroll-top";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Logo from "./_components/logo";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-6 w-full  dark:bg-[#1F1F1F]",
        scrolled && " border-b shadow "
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
