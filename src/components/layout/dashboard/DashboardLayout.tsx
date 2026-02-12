// src/layouts/DashboardLayout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@components/common/AppSidebar";

// Khai báo Interface để code sạch và dễ mở rộng
interface DashboardLayoutProps {
  title?: string; // Dấu ? nghĩa là không bắt buộc
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ title }) => {
  return (
    <div className="layout">
      {/* sidebar */}
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;