"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

export function DashboardHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  const toggleSidebar = () => {
    const event = new CustomEvent("toggle-sidebar");
    window.dispatchEvent(event);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className='border-b border-primary bg-card px-6 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center w-full max-w-sm'>
          {isMobile && (
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
              onClick={toggleSidebar}
            >
              <Menu className='h-5 w-5' />
            </Button>
          )}
          <div className='relative flex-1'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search...'
              className='pl-8 bg-primary/15 border-none focus-visible:ring-1 focus-visible:ring-primary'
            />
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='relative'>
                <Bell className='h-5 w-5' />
                <Badge className='absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs'>
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-80 '>
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium'>Motion Detected</p>
                  <p className='text-xs text-muted-foreground'>
                    Camera 2 - 5 minutes ago
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium'>Temperature Alert</p>
                  <p className='text-xs text-muted-foreground'>
                    Device TH-103 - 15 minutes ago
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className='cursor-pointer'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium'>System Update Available</p>
                  <p className='text-xs text-muted-foreground'>
                    Version 2.4.0 - 1 hour ago
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='cursor-pointer text-center text-primary'>
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
