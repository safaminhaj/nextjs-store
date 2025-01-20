"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LuTrash2 } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("capitalize", className)}
      size={size}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 animate-spin h-4 w-4" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <FaRegEdit />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      className="p-2 cursor-pointer"
      size="icon"
      variant="link"
    >
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
};
