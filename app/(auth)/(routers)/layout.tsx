import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "notion clone Sigin ",
  description: "notion clone  ",
};
import { FC } from "react";

interface AuthlayoutProps {
  children: React.ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className=" flex flex-col items-center justify-center  w-full h-full">
      {children}
    </div>
  );
};

export default Authlayout;
