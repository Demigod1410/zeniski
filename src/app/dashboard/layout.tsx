import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex bg-black h-16 shrink-0 items-center gap-2 border-b px-4 top-0 sticky">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="ml-auto">

              <SignedIn>
                <UserButton />
              </SignedIn>
              </div>
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
    </>
  );
}
