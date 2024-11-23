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

// This is sample data.


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
        {/* <Link href="/dashboard">
          <Image src={cbsLogo} alt="CBS" width={449} height={212} className="m-auto max-w-24" />
        </Link> */}
      </SidebarHeader>
      <SidebarContent className="mt-10">
        <SidebarMenu>
          {menu.map((item) => ((
            <SidebarMenuItem key={item.title}>
              <Button asChild variant={item.isActive ? "secondary" : "ghost"} className="w-full justify-start px-10">
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
