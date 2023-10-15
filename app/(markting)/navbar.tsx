"use client";

import { useScrollTop } from "@/hooks/use-sroll-top";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Logo from "./_components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import LoaderSpiner from "@/components/loader-spiner";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center p-6 w-full  dark:bg-[#1F1F1F]",
        scrolled && " border-b shadow w shadow-slate-800  dark:shadow-gray-300"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <LoaderSpiner size={"sm"} />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"}>Login</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant={"ghost"}>Get Notion free</Button>
            </SignUpButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href={"/doucments"}>Enter notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
