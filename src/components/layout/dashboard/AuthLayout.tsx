// src/layouts/DashboardLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

// Khai báo Interface để code sạch và dễ mở rộng
interface AuthLayoutProps {
  title?: string; // Dấu ? nghĩa là không bắt buộc
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title }) => {
  return (
    <div className="layout">
      <header><h1>{title || "Dashboard"}</h1></header>
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default AuthLayout;