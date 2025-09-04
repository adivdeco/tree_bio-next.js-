import type React from "react"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

import { SidebarWrapper } from "@/modules/dashbord/components/sidebar-wrapper"
import { AppSidebar } from "@/modules/dashbord/components/app-sidebar"

import AppHeader from "@/modules/dashbord/components/app-header"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarWrapper>
            <AppSidebar />
            <SidebarInset>
                <AppHeader />
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarWrapper>
    )
}

export default AdminLayout;

