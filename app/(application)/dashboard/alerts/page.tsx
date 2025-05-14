"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Bell,
  AlertTriangle,
  XCircle,
  CheckCircle,
  Clock,
  Search,
  Camera,
  Thermometer,
  Wifi,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AlertsPage() {
  const [filter, setFilter] = useState("all");

  const alerts = [
    {
      id: 1,
      title: "Unauthorized Access Attempt",
      description:
        "Multiple failed login attempts detected from IP 192.168.1.45",
      time: "30 min ago",
      severity: "critical",
      source: "security",
      icon: Lock,
    },
    {
      id: 2,
      title: "Temperature Threshold Exceeded",
      description:
        "Device TH-103 reported temperature of 85°C (threshold: 80°C)",
      time: "2 hours ago",
      severity: "warning",
      source: "sensor",
      icon: Thermometer,
    },
    {
      id: 3,
      title: "Camera 2 Offline",
      description: "Camera 2 in Warehouse B has been offline for 15 minutes",
      time: "5 hours ago",
      severity: "warning",
      source: "camera",
      icon: Camera,
    },
    {
      id: 4,
      title: "Network Connectivity Issue",
      description: "Intermittent connection detected on WiFi Router 1",
      time: "1 day ago",
      severity: "info",
      source: "network",
      icon: Wifi,
    },
    {
      id: 5,
      title: "Motion Detected",
      description: "Motion detected on Camera 3 during non-operational hours",
      time: "1 day ago",
      severity: "warning",
      source: "camera",
      icon: Camera,
    },
  ];

  const filteredAlerts =
    filter === "all"
      ? alerts
      : alerts.filter(
          (alert) => alert.severity === filter || alert.source === filter
        );

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Alerts</h1>
          <p className='text-muted-foreground'>
            Smart alert system based on visual detection or IoT anomalies
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <Button variant='outline'>
            <Bell className='mr-2 h-4 w-4' /> Configure Alerts
          </Button>
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='relative flex-1 max-w-sm'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            type='search'
            placeholder='Search alerts...'
            className='pl-8'
          />
        </div>

        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter alerts' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Alerts</SelectItem>
            <SelectItem value='critical'>Critical</SelectItem>
            <SelectItem value='warning'>Warning</SelectItem>
            <SelectItem value='info'>Info</SelectItem>
            <SelectItem value='camera'>Camera</SelectItem>
            <SelectItem value='sensor'>Sensors</SelectItem>
            <SelectItem value='network'>Network</SelectItem>
            <SelectItem value='security'>Security</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alert Center</CardTitle>
          <CardDescription>
            View and manage system alerts and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            {filteredAlerts.length === 0 ? (
              <div className='flex flex-col items-center justify-center py-8'>
                <CheckCircle className='h-12 w-12 text-muted-foreground opacity-20' />
                <p className='mt-2 text-muted-foreground'>No alerts found</p>
              </div>
            ) : (
              filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className='flex items-start space-x-4 p-4 border border-primary rounded-md'
                >
                  <div
                    className={`p-2 rounded-full ${
                      alert.severity === "critical"
                        ? "bg-red-500/20"
                        : alert.severity === "warning"
                        ? "bg-yellow-500/20"
                        : "bg-blue-500/20"
                    }`}
                  >
                    {alert.severity === "critical" ? (
                      <XCircle className='h-5 w-5 text-red-500' />
                    ) : alert.severity === "warning" ? (
                      <AlertTriangle className='h-5 w-5 text-yellow-500' />
                    ) : (
                      <alert.icon className='h-5 w-5 text-blue-500' />
                    )}
                  </div>

                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center space-x-2'>
                        <h4 className='font-medium'>{alert.title}</h4>
                        <Badge
                          variant={
                            alert.severity === "critical"
                              ? "destructive"
                              : alert.severity === "warning"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className='flex items-center space-x-2 text-muted-foreground'>
                        <Clock className='h-3 w-3' />
                        <span className='text-xs'>{alert.time}</span>
                      </div>
                    </div>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      {alert.description}
                    </p>
                    <div className='mt-3 flex items-center space-x-2'>
                      <Button variant='outline' size='sm'>
                        Acknowledge
                      </Button>
                      <Button variant='outline' size='sm'>
                        Investigate
                      </Button>
                      <Button
                        variant='ghost'
                        size='sm'
                        className='text-red-500'
                      >
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Alert Rules</CardTitle>
            <CardDescription>
              Configure when and how alerts are triggered
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Temperature Threshold</p>
                  <p className='text-sm text-muted-foreground'>
                    Alert when temperature exceeds 80°C
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Motion Detection</p>
                  <p className='text-sm text-muted-foreground'>
                    Alert when motion is detected after hours
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Failed Login Attempts</p>
                  <p className='text-sm text-muted-foreground'>
                    Alert after 3 consecutive failed login attempts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Device Offline</p>
                  <p className='text-sm text-muted-foreground'>
                    Alert when any device is offline for more than 5 minutes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Configure how you receive alert notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Email Notifications</p>
                  <p className='text-sm text-muted-foreground'>
                    Send alerts to admin@4ctech.com
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>SMS Notifications</p>
                  <p className='text-sm text-muted-foreground'>
                    Send critical alerts via SMS
                  </p>
                </div>
                <Switch />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Push Notifications</p>
                  <p className='text-sm text-muted-foreground'>
                    Send alerts to mobile app
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                <div>
                  <p className='font-medium'>Slack Integration</p>
                  <p className='text-sm text-muted-foreground'>
                    Send alerts to #security-alerts channel
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
