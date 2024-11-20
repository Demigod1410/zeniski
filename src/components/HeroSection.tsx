import Link from "next/link"
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";

function HeroSection () {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="h-auto md:h-[40rem] 
      w-full rounded-md flex flex-col items-center 
      justify-center relative overflow-hidden
       mx-auto py-10 md:py-0">
        
        <div className="p-4 relative z-10 
        w-full text-center">
          <h1 className="mt-20 md:mt-0 text-5xl md:text-9xl 
          font-bold bg-clip-text text-transparent bg-gradient-to-b 
          from-neutral-50 to-neutral-400"
          >Zeniski</h1>
          <p className="mt-4 font-normal text-base md:text-lg 
          text-neutral-300 max-w-lg mx-auto"
          >Gamify your life</p>
          <div className="mt-4">
                <Link href={"/"}>
                <Button
                    borderRadius="2rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Get Started
                    </Button>
                </Link>
            </div>

        </div>
      </div>
      </div>

    )

}

export default HeroSection