"use client";

import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Divide,
  LucideIcon,
} from "lucide-react";
import { FC } from "react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => {};
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

const Item: FC<ItemProps> = ({
  id,
  documentIcon,
  active,
  isSearch,
  level = 0,
  onExpand,
  expanded,
  label,
  onClick,
  icon: Icon,
}) => {
  const ChevronIcon = expanded ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div
      role="button"
      onClick={onClick}
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn(
        "group min-h-[27px] text-sm py-1 w-full hover:bg-primary/5 text-muted-foreground font-medium flex items-center",
        active && "bg-primary/5 text-primary "
      )}
    >
      {!!id && (
        <div
          role="button"
          className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1"
          onClick={() => {}}
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50 " />
        </div>
      )}
      {documentIcon ? (
        <div className="text-lg shrink-0 mr-2  ">{documentIcon}</div>
      ) : (
        <Icon className="h-4 mr-2  shrink-0  text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex select-none  h-5 items-center gap-1 rounded border bg-muted px-1 font-mono  text-sm  font-medium text-muted-foreground  opacity-100">
          <span className="text-xs ">⌘ </span>K
        </kbd>
      )}
    </div>
  );
};

export default Item;
