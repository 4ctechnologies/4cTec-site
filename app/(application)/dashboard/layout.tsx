"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Toaster } from "@/components/ui/toaster";
// import "./dashboard.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const handleSidebarToggle = (e: CustomEvent) => {
      setIsSidebarCollapsed(e.detail.collapsed);
    };

    window.addEventListener(
      "sidebar-toggle",
      handleSidebarToggle as EventListener
    );

    return () => {
      window.removeEventListener(
        "sidebar-toggle",
        handleSidebarToggle as EventListener
      );
    };
  }, []);

  return (
    <div className='flex h-screen bg-primary/15 text-secondary dark:bg-secondary dark:text-white'>
      <DashboardSidebar />
      <div
        className='flex flex-col flex-1 transition-all duration-300 ease-in-out'
        style={{
          marginLeft: isMobile ? 0 : isSidebarCollapsed ? "5rem" : "16rem",
        }}
      >
        <DashboardHeader />
        <main className='flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
      <Toaster />
    </div>
  );
}
