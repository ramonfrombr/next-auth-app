import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NextAuthApp from "@/public/next-auth-logo.png";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex items-center justify-center", font.className)}>
        <Image src={NextAuthApp} height={35} alt="Next Auth logo" className="mr-3" />
        <span>Next Auth App</span>
      </h1>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export { Header };
