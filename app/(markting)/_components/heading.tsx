"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { FC } from "react";

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
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
      <Button > Enter notion <ArrowRightIcon className="h-4 w-4 ml-2 "/>  </Button>
    </div>
  );
};

export default Heading;
