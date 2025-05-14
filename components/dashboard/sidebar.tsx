"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Camera,
  ToggleLeft,
  Bell,
  BarChart2,
  Users,
  Settings,
  Home,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navItems = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Camera Feed",
    href: "/dashboard/camera",
    icon: Camera,
  },
  {
    name: "Device Control",
    href: "/dashboard/devices",
    icon: ToggleLeft,
  },
  {
    name: "Alerts",
    href: "/dashboard/alerts",
    icon: Bell,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart2,
  },
  {
    name: "Access Management",
    href: "/dashboard/access",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Check if we're on mobile based on window width
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

  // Reset sidebar state when switching between mobile and desktop
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(false);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  // Emit event when sidebar is collapsed/expanded
  useEffect(() => {
    if (!isMobile) {
      const event = new CustomEvent("sidebar-toggle", {
        detail: { collapsed: isCollapsed },
      });
      window.dispatchEvent(event);
    }
  }, [isCollapsed, isMobile]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant='ghost'
        size='icon'
        className='fixed top-4 left-4 z-50 md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className='fixed top-8 left-80 h-20 w-20' />
        ) : (
          <Menu className='h-6 w-6' />
        )}
      </Button>

      {/* Desktop collapse button */}
      {!isMobile && (
        <Button
          variant='ghost'
          size='icon'
          className='fixed bottom-4 left-4 z-50 hidden md:flex'
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <ChevronRight className='h-6 w-6' />
          ) : (
            <ChevronLeft className='h-6 w-6' />
          )}
        </Button>
      )}

      {/* Sidebar overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className='fixed inset-0 bg-primary/80 backdrop-blur-md z-30'
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 bg-card border-r border-primary transform transition-all duration-300 ease-in-out",
          // Mobile states
          isMobile &&
            (isOpen ? "translate-x-0 border-none w-full" : "-translate-x-full"),
          // Desktop states
          !isMobile && (isCollapsed ? "w-20" : "w-64")
        )}
      >
        <div className='flex flex-col h-full'>
          <div className={cn("p-6", isCollapsed && !isMobile && "p-4")}>
            {isCollapsed && !isMobile ? (
              <div className='flex justify-center'>
                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <span className='text-primary font-bold'>4C</span>
                </div>
              </div>
            ) : (
              <>
                <h2 className='text-2xl font-bold text-secondary dark:text-white'>
                  4C Technologies
                </h2>
                <p className='text-muted-foreground text-sm'>
                  Enterprise IoT Dashboard
                </p>
              </>
            )}
          </div>

          <nav
            className={cn(
              "flex-1 px-4 space-y-1 overflow-y-auto",
              isMobile && "space-y-4 w-full"
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-sm rounded-md transition-colors",
                  pathname === item.href
                    ? isMobile
                      ? "bg-secondary/90 text-primary"
                      : "bg-primary text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-primary ",
                  isCollapsed && !isMobile && "justify-center px-2"
                )}
                onClick={() => {
                  if (isMobile) {
                    setIsOpen(false);
                  }
                }}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5",
                    isCollapsed && !isMobile ? "mr-0" : "mr-3"
                  )}
                />
                {(!isCollapsed || isMobile) && item.name}
              </Link>
            ))}
          </nav>

          <div className={cn("p-6", isCollapsed && !isMobile && "p-4")}>
            {isCollapsed && !isMobile ? (
              <div className='flex justify-center'>
                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <span className='text-primary font-medium'>AT</span>
                </div>
              </div>
            ) : (
              <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <span className='text-primary font-medium'>AT</span>
                </div>
                <div>
                  <p className='text-sm font-medium'>Admin User</p>
                  <p className='text-xs text-muted-foreground'>
                    admin@4ctech.com
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
