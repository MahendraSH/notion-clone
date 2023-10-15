"use client";
import LoaderSpiner from "@/components/loader-spiner";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        notion is the connected workspace where <br />
        better, faster work happens
      </h3>
      {isLoading && (
        <div className=" w-full flex justify-center items-center ">
          <LoaderSpiner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href={"/doucments"}>
            Enter notion <ArrowRightIcon className="h-4 w-4 ml-2 " />{" "}
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignUpButton mode="modal">
          <Button>
            Get Notion free <ArrowRightIcon className="h-4 w-4 ml-2 " />{" "}
          </Button>
        </SignUpButton>
      )}
    </div>
  );
};

export default Heading;
