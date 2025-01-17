"use client";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logout Successful" });
  };
  return (
    <SignOutButton>
      <Link
        href="/"
        className="w-full text-left text-sm pl-2"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
