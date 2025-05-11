
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/theme-provider';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile settings have been saved.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences</p>
      </div>

      <form onSubmit={handleSaveProfile}>
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" defaultValue="30" min="1" max="120" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue="male">
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" defaultValue="175" min="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" defaultValue="70" step="0.1" min="1" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Profile</Button>
          </CardFooter>
        </Card>
      </form>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Customize your app experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-preference">Theme Preference</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred appearance</p>
              </div>
              <Select
                value={theme}
                onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="units">Measurement Units</Label>
                <p className="text-sm text-muted-foreground">Choose your preferred units of measurement</p>
              </div>
              <Select defaultValue="metric">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select units" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lb, in)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive reminders and updates</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="weekly-goals">Weekly Goals Reminder</Label>
                <p className="text-sm text-muted-foreground">Get notifications about your weekly goals</p>
              </div>
              <Switch id="weekly-goals" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Management</CardTitle>
          <CardDescription>Manage your workout and progress data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">Export Data</Button>
            <Button variant="outline" className="w-full">Import Data</Button>
          </div>
          <div className="pt-4">
            <Button variant="destructive">Delete All Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
