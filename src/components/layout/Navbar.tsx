
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  SidebarTrigger
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center px-4 md:px-6">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SidebarTrigger>
        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'light' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center">
            <div className="ml-2">
              <p className="text-sm font-medium">Guest User</p>
              <p className="text-xs text-muted-foreground">
                <Link to="/settings" className="hover:underline">View profile</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
