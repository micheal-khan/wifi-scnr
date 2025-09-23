import { AppSidebar } from "@/components/app-sidebar";
import { AppleStyleDock } from "@/components/dock";
import { ServerManagementTable } from "@/components/server-management-table";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
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
                  <BreadcrumbLink href="#">Wifi-Scnr</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>SCAN</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Push this to the far right */}
          <div className="ml-auto px-4">
            <AnimatedThemeToggler />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <ServerManagementTable title="Active WiFi" />
        <AppleStyleDock />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
