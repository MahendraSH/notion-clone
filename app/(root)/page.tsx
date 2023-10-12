import { Button } from "@/components/ui/button";
import { FC } from "react";
import { UserButton } from "@clerk/nextjs";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" p-1 m-auto max-h-screen w-full justify-center items-center flex-col ">
      <p className="text-center p-1 px-3  m-auto first-letter:capitalize w-full ">
        {" "}
        notion clone{" "}
      </p>
      <Button
        variant={"default"}
        size={"sm"}
        className="justify-center mx-auto"
      >
        {" "}
        get started{" "}
      </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
