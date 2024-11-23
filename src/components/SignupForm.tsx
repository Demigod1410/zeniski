"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { MovingBorder } from "./ui/moving-border";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md  justify-center mx-auto items-center rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black dark:bg-white">
      <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
        Welcome to Zeniski
      </h2>
      <p className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to zeniski if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0  bg-black md:space-x-2 mb-4">
          <LabelInputContainer className="">
            <Label className="text-neutral-200" htmlFor="firstname">Username</Label>
            <Input className="bg-slate-900 placeholder-white text-white" id="firstname" placeholder="Username" type="text" />
          </LabelInputContainer>
          
        </div>
        
        <LabelInputContainer className="mb-4 ">
          <Label className="text-neutral-200"htmlFor="password">Password</Label>
          <Input className="bg-slate-900"id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className=" bg-neutral-300 relative group/btn from-slate-600 dark:from-zinc-500 dark:to-zinc-500  block dark:bg-zinc-500 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          <span className="text-neutral-950">
            Sign In 
          </span>
          <BottomGradient />
        </button>

        <div className="bg-neutral-200 via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
        <Label className="text-neutral-200"htmlFor="password">Sign Up With Google</Label>
          <button
            className=" bg-neutral-300 relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-white rounded-md h-10 font-medium shadow-input  dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-900 dark:text-neutral-300" />
            
            <span className="text-neutral-900 dark:text-neutral-300 text-sm">
                
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
