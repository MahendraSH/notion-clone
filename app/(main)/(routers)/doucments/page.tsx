"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { toast } from "sonner";

interface DocumentPageProps {}

const DocumentPage: FC<DocumentPageProps> = ({}) => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const proimse = create({ title: "Untitled" });
    toast.promise(proimse, {
      loading: "Creating a new note ...",
      success: " new note created !",
      error: " Failed to create a new note .",
    });
  };
  return (
    <div className=" h-full flex flex-col items-center justify-center sape-y-4  ">
      <Image
        src="/empty.png"
        className="dark:hidden "
        alt="empty"
        width={300}
        height={300}
      />
      <Image
        src="/empty-dark.png"
        className="hidden dark:block "
        alt="empty"
        width={300}
        height={300}
      />
      <h2 className="text-lg front-medium">
        Wellcome to {user?.firstName}&apos;s Notion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircleIcon className="h-4 w-4 m-2 " /> Create a note
      </Button>
    </div>
  );
};

export default DocumentPage;
