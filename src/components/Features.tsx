
"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

function Features () {
    return (
        <div className="py-12 bg-black-900">
        
        <div className="text-center">
                <h2 className="mt-20 md:mt-0 text-5xl md:text-9xl 
          font-bold bg-clip-text text-transparent bg-gradient-to-b 
          from-neutral-50 to-neutral-400">Powerful Features</h2>
                <p className="mt-2  leading-8  tracking-tight text-white ">Everything you need to boost your productivity and social presence</p>
            </div>
            <div className="mt-20">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          AI-Powered Assistance
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Get Intelligent suggestions and automated task breakdown.
        </p>
        
      </BackgroundGradient>
    </div>
    <div className="mt-20">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Smart Task Management
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         Create and manage tasks with AI-generated steps for optimal productivity
        </p>
        
      </BackgroundGradient>
    </div>
    <div className="mt-20">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Calendar Integration
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         Seamlessly sync with Google Calender for better time Management
        </p>
        
      </BackgroundGradient>
    </div>
    <div className="mt-20">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Social Sharing
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         Share your achivements and progress with your network
        </p>
        
      </BackgroundGradient>
    </div>
        </div>

        
        
    )
}

export default Features