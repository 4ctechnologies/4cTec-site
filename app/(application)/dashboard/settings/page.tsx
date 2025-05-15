"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Save,
  Bell,
  Shield,
  SettingsIcon,
  Globe,
  Database,
  RefreshCw,
  Smartphone,
  Mail,
  MessageSquare,
  Check,
  Plus,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/hooks/useTheme";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [interval, setInterval] = useState(30);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
        action: (
          <div className='h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center'>
            <Check className='h-4 w-4 text-primary' />
          </div>
        ),
      });
    }, 1000);
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Settings</h1>
          <p className='text-muted-foreground'>
            Manage your system preferences and configurations
          </p>
        </div>

        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? (
            <>
              <RefreshCw className='mr-2 h-4 w-4 animate-spin' />
              Saving...
            </>
          ) : (
            <>
              <Save className='mr-2 h-4 w-4' />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue='general'>
        <TabsList className='grid grid-cols-5 h-auto'>
          <TabsTrigger
            value='general'
            className='flex flex-col py-2 px-4 h-auto'
          >
            <SettingsIcon className='h-4 w-4 mb-1' />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger
            value='notifications'
            className='flex flex-col py-2 px-4 h-auto'
          >
            <Bell className='h-4 w-4 mb-1' />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger
            value='security'
            className='flex flex-col py-2 px-4 h-auto'
          >
            <Shield className='h-4 w-4 mb-1' />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger
            value='integrations'
            className='flex flex-col py-2 px-4 h-auto'
          >
            <Globe className='h-4 w-4 mb-1' />
            <span>Integrations</span>
          </TabsTrigger>
          <TabsTrigger
            value='system'
            className='flex flex-col py-2 px-4 h-auto'
          >
            <Database className='h-4 w-4 mb-1' />
            <span>System</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value='general' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your dashboard preferences
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Dashboard Preferences</h3>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='company-name'>Company Name</Label>
                    <Input id='company-name' defaultValue='4C Technologies' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='timezone'>Timezone</Label>
                    <Select defaultValue='utc'>
                      <SelectTrigger id='timezone'>
                        <SelectValue placeholder='Select timezone' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='utc'>
                          UTC (Coordinated Universal Time)
                        </SelectItem>
                        <SelectItem value='est'>
                          EST (Eastern Standard Time)
                        </SelectItem>
                        <SelectItem value='cst'>
                          CST (Central Standard Time)
                        </SelectItem>
                        <SelectItem value='mst'>
                          MST (Mountain Standard Time)
                        </SelectItem>
                        <SelectItem value='pst'>
                          PST (Pacific Standard Time)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='date-format'>Date Format</Label>
                    <Select defaultValue='mdy'>
                      <SelectTrigger id='date-format'>
                        <SelectValue placeholder='Select date format' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='mdy'>MM/DD/YYYY</SelectItem>
                        <SelectItem value='dmy'>DD/MM/YYYY</SelectItem>
                        <SelectItem value='ymd'>YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='time-format'>Time Format</Label>
                    <Select defaultValue='12h'>
                      <SelectTrigger id='time-format'>
                        <SelectValue placeholder='Select time format' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='12h'>12-hour (AM/PM)</SelectItem>
                        <SelectItem value='24h'>24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='auto-refresh'>Auto-refresh Dashboard</Label>
                    <p className='text-sm text-muted-foreground'>
                      Automatically refresh dashboard data
                    </p>
                  </div>
                  <Switch id='auto-refresh' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <Label htmlFor='refresh-interval'>
                      Refresh Interval (seconds)
                    </Label>
                    <span className='text-sm text-muted-foreground'>
                      {interval}s
                    </span>
                  </div>
                  <Slider
                    defaultValue={[interval]}
                    min={5}
                    max={60}
                    step={5}
                    onValueChange={(value) => setInterval(value[0])}
                  />
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Display Settings</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='dark-mode'>Dark Mode</Label>
                    <p className='text-sm text-muted-foreground'>
                      Use dark theme across the application
                    </p>
                  </div>
                  <Switch
                    id='dark-mode'
                    defaultChecked={theme === "dark" || theme === "system"}
                    onClick={handleToggleTheme}
                  />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='compact-view'>Compact View</Label>
                    <p className='text-sm text-muted-foreground'>
                      Reduce spacing between elements
                    </p>
                  </div>
                  <Switch id='compact-view' />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='animations'>UI Animations</Label>
                    <p className='text-sm text-muted-foreground'>
                      Enable animations in the interface
                    </p>
                  </div>
                  <Switch id='animations' defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between border-t pt-5'>
              <Button variant='outline'>Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='notifications' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Notification Channels</h3>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-primary/10 p-2 rounded-full'>
                      <Mail className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='font-medium'>Email Notifications</p>
                      <p className='text-sm text-muted-foreground'>
                        Receive notifications via email
                      </p>
                    </div>
                  </div>
                  <Switch id='email-notifications' defaultChecked />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-primary/10 p-2 rounded-full'>
                      <Smartphone className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='font-medium'>Push Notifications</p>
                      <p className='text-sm text-muted-foreground'>
                        Receive push notifications on your devices
                      </p>
                    </div>
                  </div>
                  <Switch id='push-notifications' defaultChecked />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-primary/10 p-2 rounded-full'>
                      <MessageSquare className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='font-medium'>SMS Notifications</p>
                      <p className='text-sm text-muted-foreground'>
                        Receive notifications via SMS
                      </p>
                    </div>
                  </div>
                  <Switch id='sms-notifications' />
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Notification Types</h3>

                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Critical Alerts</p>
                      <p className='text-sm text-muted-foreground'>
                        High priority security and system alerts
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge variant='destructive'>Critical</Badge>
                      <Switch id='critical-alerts' defaultChecked />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Warning Alerts</p>
                      <p className='text-sm text-muted-foreground'>
                        Medium priority alerts that need attention
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge>Warning</Badge>
                      <Switch id='warning-alerts' defaultChecked />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>Information Updates</p>
                      <p className='text-sm text-muted-foreground'>
                        General system information and updates
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge variant='outline'>Info</Badge>
                      <Switch id='info-alerts' defaultChecked />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-medium'>System Maintenance</p>
                      <p className='text-sm text-muted-foreground'>
                        Scheduled maintenance notifications
                      </p>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge variant='outline'>Maintenance</Badge>
                      <Switch id='maintenance-alerts' defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Quiet Hours</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='quiet-hours'>Enable Quiet Hours</Label>
                    <p className='text-sm text-muted-foreground'>
                      Only receive critical alerts during specified hours
                    </p>
                  </div>
                  <Switch id='quiet-hours' />
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='quiet-start'>Start Time</Label>
                    <Select defaultValue='22:00'>
                      <SelectTrigger id='quiet-start'>
                        <SelectValue placeholder='Select start time' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='20:00'>8:00 PM</SelectItem>
                        <SelectItem value='21:00'>9:00 PM</SelectItem>
                        <SelectItem value='22:00'>10:00 PM</SelectItem>
                        <SelectItem value='23:00'>11:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='quiet-end'>End Time</Label>
                    <Select defaultValue='07:00'>
                      <SelectTrigger id='quiet-end'>
                        <SelectValue placeholder='Select end time' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='06:00'>6:00 AM</SelectItem>
                        <SelectItem value='07:00'>7:00 AM</SelectItem>
                        <SelectItem value='08:00'>8:00 AM</SelectItem>
                        <SelectItem value='09:00'>9:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between border-t pt-5'>
              <Button variant='outline'>Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='security' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure security preferences and authentication options
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Authentication</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='two-factor'>
                      Two-Factor Authentication
                    </Label>
                    <p className='text-sm text-muted-foreground'>
                      Require 2FA for all admin accounts
                    </p>
                  </div>
                  <Switch id='two-factor' defaultChecked />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='sso'>Single Sign-On (SSO)</Label>
                    <p className='text-sm text-muted-foreground'>
                      Enable SSO with WSO2 Asgardeo
                    </p>
                  </div>
                  <Switch id='sso' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='session-timeout'>
                    Session Timeout (minutes)
                  </Label>
                  <div className='flex items-center space-x-4'>
                    <Slider
                      defaultValue={[30]}
                      min={5}
                      max={120}
                      step={5}
                      className='flex-1'
                    />
                    <span className='w-12 text-center'>30</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Password Policy</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='password-complexity'>
                      Enforce Strong Passwords
                    </Label>
                    <p className='text-sm text-muted-foreground'>
                      Require complex passwords with special characters
                    </p>
                  </div>
                  <Switch id='password-complexity' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='password-expiry'>
                    Password Expiry (days)
                  </Label>
                  <Select defaultValue='90'>
                    <SelectTrigger id='password-expiry'>
                      <SelectValue placeholder='Select expiry period' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='30'>30 days</SelectItem>
                      <SelectItem value='60'>60 days</SelectItem>
                      <SelectItem value='90'>90 days</SelectItem>
                      <SelectItem value='180'>180 days</SelectItem>
                      <SelectItem value='never'>Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='failed-attempts'>
                    Max Failed Login Attempts
                  </Label>
                  <Select defaultValue='5'>
                    <SelectTrigger id='failed-attempts'>
                      <SelectValue placeholder='Select maximum attempts' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='3'>3 attempts</SelectItem>
                      <SelectItem value='5'>5 attempts</SelectItem>
                      <SelectItem value='10'>10 attempts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Access Control</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='ip-restriction'>
                      IP Address Restriction
                    </Label>
                    <p className='text-sm text-muted-foreground'>
                      Limit access to specific IP addresses
                    </p>
                  </div>
                  <Switch id='ip-restriction' />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='allowed-ips'>Allowed IP Addresses</Label>
                  <Input
                    id='allowed-ips'
                    placeholder='e.g. 192.168.1.1, 10.0.0.1/24'
                  />
                  <p className='text-xs text-muted-foreground'>
                    Enter comma-separated IP addresses or CIDR ranges
                  </p>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='audit-logging'>
                      Enhanced Audit Logging
                    </Label>
                    <p className='text-sm text-muted-foreground'>
                      Log all user actions for security review
                    </p>
                  </div>
                  <Switch id='audit-logging' defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between border-t pt-5'>
              <Button variant='outline'>Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='integrations' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>API & Integrations</CardTitle>
              <CardDescription>
                Manage external integrations and API settings
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>API Configuration</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='api-access'>Enable API Access</Label>
                    <p className='text-sm text-muted-foreground'>
                      Allow external systems to access the API
                    </p>
                  </div>
                  <Switch id='api-access' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='api-key'>API Key</Label>
                  <div className='flex space-x-2'>
                    <Input
                      id='api-key'
                      value='••••••••••••••••••••••••••••••'
                      readOnly
                      className='flex-1'
                    />
                    <Button variant='outline'>Regenerate</Button>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    Use this key to authenticate API requests
                  </p>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='rate-limit'>
                    API Rate Limit (requests per minute)
                  </Label>
                  <Select defaultValue='100'>
                    <SelectTrigger id='rate-limit'>
                      <SelectValue placeholder='Select rate limit' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='60'>60 requests</SelectItem>
                      <SelectItem value='100'>100 requests</SelectItem>
                      <SelectItem value='500'>500 requests</SelectItem>
                      <SelectItem value='1000'>1000 requests</SelectItem>
                      <SelectItem value='unlimited'>Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>
                  Third-Party Integrations
                </h3>

                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-primary/10 p-2 rounded-full'>
                        <svg
                          className='h-5 w-5 text-primary'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium'>WSO2 Asgardeo</p>
                        <p className='text-sm text-muted-foreground'>
                          Identity and access management
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='outline'
                        className='bg-green-500/10 text-green-500 hover:bg-green-500/20'
                      >
                        Connected
                      </Badge>
                      <Button variant='outline' size='sm'>
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-primary/10 p-2 rounded-full'>
                        <svg
                          className='h-5 w-5 text-primary'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium'>NVIDIA AI Platform</p>
                        <p className='text-sm text-muted-foreground'>
                          AI-powered video analytics
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='outline'
                        className='bg-yellow-500/10 text-yellow-500 hover:bg-green-500/20'
                      >
                        Warning!
                      </Badge>
                      <Button variant='outline' size='sm'>
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-primary/10 p-2 rounded-full'>
                        <svg
                          className='h-5 w-5 text-primary'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium'>Slack</p>
                        <p className='text-sm text-muted-foreground'>
                          Notifications and alerts
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='outline'
                        className='bg-muted text-muted-foreground hover:bg-muted/80'
                      >
                        Not Connected
                      </Badge>
                      <Button variant='outline' size='sm'>
                        Connect
                      </Button>
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                      <div className='bg-primary/10 p-2 rounded-full'>
                        <svg
                          className='h-5 w-5 text-primary'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' />
                        </svg>
                      </div>
                      <div>
                        <p className='font-medium'>Twilio</p>
                        <p className='text-sm text-muted-foreground'>
                          SMS notifications
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='outline'
                        className='bg-muted text-muted-foreground hover:bg-muted/80'
                      >
                        Not Connected
                      </Badge>
                      <Button variant='outline' size='sm'>
                        Connect
                      </Button>
                    </div>
                  </div>
                </div>

                <Button variant='outline' className='w-full'>
                  <Plus className='mr-2 h-4 w-4' /> Add New Integration
                </Button>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between border-t pt-5'>
              <Button variant='outline'>Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value='system' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure system-wide settings and maintenance options
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>System Maintenance</h3>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='auto-updates'>Automatic Updates</Label>
                    <p className='text-sm text-muted-foreground'>
                      Automatically install system updates
                    </p>
                  </div>
                  <Switch id='auto-updates' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='update-schedule'>Update Schedule</Label>
                  <Select defaultValue='weekly'>
                    <SelectTrigger id='update-schedule'>
                      <SelectValue placeholder='Select update schedule' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='daily'>Daily</SelectItem>
                      <SelectItem value='weekly'>Weekly</SelectItem>
                      <SelectItem value='monthly'>Monthly</SelectItem>
                      <SelectItem value='manual'>Manual Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='maintenance-mode'>Maintenance Mode</Label>
                    <p className='text-sm text-muted-foreground'>
                      Temporarily disable access for maintenance
                    </p>
                  </div>
                  <Switch id='maintenance-mode' />
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Data Management</h3>

                <div className='space-y-2'>
                  <Label htmlFor='data-retention'>Data Retention Period</Label>
                  <Select defaultValue='90'>
                    <SelectTrigger id='data-retention'>
                      <SelectValue placeholder='Select retention period' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='30'>30 days</SelectItem>
                      <SelectItem value='90'>90 days</SelectItem>
                      <SelectItem value='180'>180 days</SelectItem>
                      <SelectItem value='365'>1 year</SelectItem>
                      <SelectItem value='unlimited'>Unlimited</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className='text-xs text-muted-foreground'>
                    How long to keep historical data before automatic deletion
                  </p>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='auto-backup'>Automatic Backups</Label>
                    <p className='text-sm text-muted-foreground'>
                      Regularly backup system data
                    </p>
                  </div>
                  <Switch id='auto-backup' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='backup-schedule'>Backup Schedule</Label>
                  <Select defaultValue='daily'>
                    <SelectTrigger id='backup-schedule'>
                      <SelectValue placeholder='Select backup schedule' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='daily'>Daily</SelectItem>
                      <SelectItem value='weekly'>Weekly</SelectItem>
                      <SelectItem value='monthly'>Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='backup-location'>
                    Backup Storage Location
                  </Label>
                  <Input
                    id='backup-location'
                    defaultValue='/var/backups/4c-tech'
                  />
                </div>
              </div>

              <Separator />

              <div className='space-y-4'>
                <h3 className='text-lg font-medium'>Performance</h3>

                <div className='space-y-2'>
                  <Label htmlFor='log-level'>Logging Level</Label>
                  <Select defaultValue='info'>
                    <SelectTrigger id='log-level'>
                      <SelectValue placeholder='Select logging level' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='debug'>Debug (Verbose)</SelectItem>
                      <SelectItem value='info'>Info (Standard)</SelectItem>
                      <SelectItem value='warn'>Warning</SelectItem>
                      <SelectItem value='error'>Error Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='cache-enabled'>Enable Caching</Label>
                    <p className='text-sm text-muted-foreground'>
                      Cache frequently accessed data for better performance
                    </p>
                  </div>
                  <Switch id='cache-enabled' defaultChecked />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='cache-ttl'>Cache TTL (minutes)</Label>
                  <div className='flex items-center space-x-4'>
                    <Slider
                      defaultValue={[15]}
                      min={1}
                      max={60}
                      step={1}
                      className='flex-1'
                    />
                    <span className='w-12 text-center'>15</span>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    Time to live for cached data
                  </p>
                </div>
              </div>

              <div className='pt-4 space-y-4'>
                <h3 className='text-lg font-medium text-red-500'>
                  Danger Zone
                </h3>

                <div className='border border-red-500/20 rounded-md p-4 bg-red-500/5'>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium'>Reset System</p>
                        <p className='text-sm text-muted-foreground'>
                          Reset all settings to factory defaults
                        </p>
                      </div>
                      <Button variant='destructive'>Reset System</Button>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div>
                        <p className='font-medium'>Purge All Data</p>
                        <p className='text-sm text-muted-foreground'>
                          Permanently delete all system data
                        </p>
                      </div>
                      <Button variant='destructive'>Purge Data</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between border-t pt-5'>
              <Button variant='outline'>Reset to Defaults</Button>
              <Button onClick={handleSave} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
