
import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {!isMobile && <Sidebar />}
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
