import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import NextAuthApp from "@/public/next-auth-logo.png";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md flex items-center justify-center",
            font.className
          )}
        >
          <Image src={NextAuthApp} height={60} alt="Next Auth logo" className="mr-4" />
          <span>Next Auth App</span>
        </h1>
        <p className="text-white text-lg">A production-ready authentication boilerplate application for Next.js projects.</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
