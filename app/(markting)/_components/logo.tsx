import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="hidden md:flex items-center  ">
      <Image
        src={"/notion.svg"}
        height={20}
        width={20}
        className="dark:hidden"
        alt="logo"
      />
      <Image
        src={"/notion-dark.svg"}
        height={20}
        width={20}
        className="hidden dark:block"
        alt="logo"
      />
      <p className={cn("font-semibold", font.className)}> otion</p>
    </div>
  );
};

export default Logo;
