"use client";

import { cn } from "@/lib/utils";
import {
  ChevronsLeftIcon,
  MenuIcon,
  PlusCircleIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Item from "./item";
import { useMutation } from "convex/react";
import { toast } from "sonner";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:768px)");
  const create = useMutation(api.documents.create);
  const documents = useQuery(api.documents.get);

  const onCreate = () => {
    const proimse = create({ title: "Untitled" });
    toast.promise(proimse, {
      loading: "Creating a new note ...",
      success: " new note created !",
      error: " Failed to create a new note .",
    });
  };

  const isResizingRef = useRef(false);
  const siderbarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);
  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [isMobile, pathname]);
  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (siderbarRef.current && navbarRef.current) {
      siderbarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (siderbarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResizing(true);
      siderbarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100%-240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResizing(false), 300);
    }
  };
  const collapse = () => {
    if (siderbarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResizing(true);
      siderbarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResizing(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={siderbarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResizing && " transition-all ease-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          className={cn(
            " h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 absolute  top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition ",
            isMobile && "opacity-100"
          )}
          role="button"
        >
          <ChevronsLeftIcon className="h-6 w-6" />
        </div>
        <div className="">
          <UserItem />
          <Item
            onClick={() => {}}
            label="Search ..."
            isSearch={true}
            icon={SearchIcon}
          />
          <Item
            onClick={() => {}}
            label="Settings"

            icon={SettingsIcon}
          />
          <Item onClick={onCreate} icon={PlusCircleIcon} label="New page " />
        </div>
        <div className="mt-4">
          {documents?.map((document) => (
            <p key={document._id}>{document.title}</p>
          ))}
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className=" opacity-0 group-hover/sidebar:opacity-100  transition cursor-ew-resize  absolute h-full w-1 bg-primary/10 right-0 top-0 "
        />
      </aside>
      <div
        className={cn(
          " absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResizing && " transition-all ease-out duration-300",
          isMobile && "left-0 w-full"
        )}
        ref={navbarRef}
      >
        <nav className="bg-transparent px-3 py-2 w-full ">
          {isCollapsed && (
            <MenuIcon
              className="h-6 w-6 text-muted-foreground "
              role="button"
              onClick={resetWidth}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
