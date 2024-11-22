
import { Button } from "@/components/ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

function HeroSection () {
    return (
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
      
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center  justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >Zeniski</h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          >Where Productivity Meets Purpose—Complete Tasks, Share Achievements, Level Up, and Inspire Others Along the Way!</p>
          
          <div className="mt-4">
                <Link href={"/"}>
                <Button
                    borderRadius="2rem"
                    // className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-1000"
                    className="bg-slate-700 bg-transparent backdrop-blur-md"
                    >
                    Get Started
                    </Button>
                    
                </Link>
            </div>
            

        </div>
      </div>
      </div>
      </BackgroundLines>
    )

}

export default HeroSection