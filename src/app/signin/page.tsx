"use client";

import { SignupFormDemo } from "@/components/SignupForm";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function SignUp() {
  return (
    <div className="h-screen w-full relative flex justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Centered Content */}
      <BackgroundGradient className="rounded-[22px] p-5 sm:p-8 bg-black dark:bg-zinc-900 flex justify-center items-center">
        <SignupFormDemo />
      </BackgroundGradient>
    </div>
  );
}
