// src/components/HeroSection.tsx
"use client";
import { Button } from "@/components/ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

function HeroSection() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  const handleGetStarted = () => {
    if (!isLoaded) return; // Wait for auth to load
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black h-screen">
      <div className="absolute top-4 left-4 z-20">
        <Image
          src="/logo.png"
          alt="Zeniski Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Zeniski
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Where Productivity Meets Purpose—Complete Tasks, Share Achievements, Level Up, and Inspire Others Along the Way!
            </p>
            <div className="mt-4">
              <Button
                onClick={handleGetStarted}
                borderRadius="2rem"
                className="bg-slate-700 bg-transparent backdrop-blur-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
}

export default HeroSection;