"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
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
    <SessionProvider>
      <div className='relative flex flex-col min-h-lvh w-full bg-primary/15 text-secondary dark:bg-secondary dark:text-white'>
        <DashboardSidebar />
        <div
          className='flex flex-col flex-1 transition-all duration-300 ease-in-out'
          style={{
            marginLeft: isMobile ? 0 : isSidebarCollapsed ? "5rem" : "16rem",
          }}
        >
          <DashboardHeader />
          <section className='p-4 md:p-6'>{children}</section>
        </div>
        <Toaster />
      </div>
    </SessionProvider>
  );
}
