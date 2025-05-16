"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex flex-col min-h-screen w-full bg-primary/15 text-secondary dark:bg-secondary dark:text-white'>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out md:ml-[16rem] ${
          "ml-0 md:ml-[5rem]" // Tailwind handles responsiveness
        }`}
      >
        <DashboardHeader />
        <section className='p-4 md-p6'>{children}</section>
      </div>
      <Toaster />
    </div>
  );
}
