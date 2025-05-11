
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Dumbbell, BarChart, Plus, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const menuItems = [
  { title: 'Dashboard', path: '/', icon: Home },
  { title: 'Workouts', path: '/workouts', icon: Dumbbell },
  { title: 'Add Workout', path: '/add-workout', icon: Plus },
  { title: 'Progress', path: '/progress', icon: BarChart },
  { title: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center px-2">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-fitness-purple to-fitness-purple-dark">
            FitTrack
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 transition-colors',
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                    )
                  }
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
