"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";

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
