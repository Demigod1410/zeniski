"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentPath = usePathname();

  const menu = [
    {
      title: "Overview",
      url: "/dashboard",
      isActive: currentPath === "/dashboard",
    },
    {
      title: "Add Task",
      url: "/dashboard/add-task",
      isActive: currentPath === "/dashboard/add-task",
    },
    {
      title: "View Tasks",
      url: "/dashboard/view-tasks",
      isActive: currentPath === "/dashboard/view-tasks",
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      isActive: currentPath === "/dashboard/analytics",
    },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader>
      <div className="border w-fit zoom-in-150 mx-auto mt-5">
                <Image
                    src="/logo.png"
                    alt="Zeniski Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                />
      </div>
      </SidebarHeader>
      <SidebarContent className="mt-5 mx-auto flex items-center">
        <SidebarMenu>
          {menu.map((item) => ((
            <SidebarMenuItem key={item.title}>
              <Button asChild variant={item.isActive ? "secondary" : "ghost"} className="w-full flex items-center justify-center px-20">
                <Link href={item.url}>{item.title}</Link>
              </Button>
            </SidebarMenuItem>
          )))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
