"use client";

import LoaderSpiner from "@/components/loader-spiner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { FC } from "react";
import Navigation from "./_components/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return (
      <div className=" h-full flex  items-center justify-center ">
        <LoaderSpiner size={"icon"} />
      </div>
    );
  } else if (isAuthenticated) {
    return (
      <div className="h-full flex dark:bg-[1f1f1f]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">{children}</main>
      </div>
    );
  } else {
    return redirect("/");
  }
};

export default MainLayout;
