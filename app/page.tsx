"use client";

import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { AppSidebar } from "@/components/app-sidebar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ServerManagementTable } from "@/components/server-management-table";
import { AppleStyleDock } from "@/components/docker";

export default function Home() {
  const [msg, setMsg] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await invoke<string>("get_message");
      console.log("Backend response:", response);

      setMsg(response);
    } catch (error) {
      console.error("Backend call failed:", error);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" collapsible="icon" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* ml-auto pushes it to the far right */}
          <AnimatedThemeToggler className="ml-auto px-4" />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {msg && <p className="text-lg font-semibold">{msg}</p>}
          <ServerManagementTable title="Active WiFi" />
          <AppleStyleDock onButtonClick={fetchMessage} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
