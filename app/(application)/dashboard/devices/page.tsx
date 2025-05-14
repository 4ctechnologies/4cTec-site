"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Settings,
  Thermometer,
  Droplets,
  Lightbulb,
  Lock,
  Wifi,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function DevicesPage() {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: "Temperature Sensor",
      type: "sensor",
      location: "Server Room",
      status: "online",
      value: "24°C",
      icon: Thermometer,
    },
    {
      id: 2,
      name: "Humidity Sensor",
      type: "sensor",
      location: "Warehouse",
      status: "online",
      value: "45%",
      icon: Droplets,
    },
    {
      id: 3,
      name: "Smart Light",
      type: "switch",
      location: "Office",
      status: "online",
      value: "On",
      icon: Lightbulb,
    },
    {
      id: 4,
      name: "Smart Lock",
      type: "switch",
      location: "Entrance",
      status: "online",
      value: "Locked",
      icon: Lock,
    },
    {
      id: 5,
      name: "WiFi Router",
      type: "network",
      location: "IT Room",
      status: "online",
      value: "Active",
      icon: Wifi,
    },
    {
      id: 6,
      name: "Temperature Sensor",
      type: "sensor",
      location: "Warehouse",
      status: "offline",
      value: "N/A",
      icon: Thermometer,
    },
  ]);

  const toggleDevice = (id: number) => {
    setDevices(
      devices.map((device) => {
        if (device.id === id) {
          const newValue =
            device.value === "On"
              ? "Off"
              : device.value === "Off"
              ? "On"
              : device.value === "Locked"
              ? "Unlocked"
              : device.value === "Unlocked"
              ? "Locked"
              : device.value;
          return { ...device, value: newValue };
        }
        return device;
      })
    );
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Device Control</h1>
          <p className='text-muted-foreground'>
            Manage and control your IoT devices
          </p>
        </div>

        <Button>
          <Plus className='mr-2 h-4 w-4' /> Add Device
        </Button>
      </div>

      <Tabs defaultValue='all'>
        <div className='flex items-center justify-between'>
          <TabsList>
            <TabsTrigger value='all'>All Devices</TabsTrigger>
            <TabsTrigger value='sensors'>Sensors</TabsTrigger>
            <TabsTrigger value='switches'>Switches</TabsTrigger>
            <TabsTrigger value='network'>Network</TabsTrigger>
          </TabsList>

          <div className='flex items-center space-x-2'>
            <Button variant='outline' size='sm'>
              <Settings className='mr-2 h-4 w-4' /> Configure
            </Button>
          </div>
        </div>

        <TabsContent value='all' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>All Devices</CardTitle>
              <CardDescription>
                View and control all connected IoT devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {devices.map((device) => (
                  <Card
                    key={device.id}
                    className={`border ${
                      device.status === "offline"
                        ? "border-muted bg-muted/30"
                        : "border-primary"
                    }`}
                  >
                    <CardContent className='p-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                          <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                            <device.icon className='h-5 w-5 text-primary' />
                          </div>
                          <div>
                            <p className='font-medium'>{device.name}</p>
                            <p className='text-xs text-muted-foreground'>
                              {device.location}
                            </p>
                          </div>
                        </div>

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='icon'>
                              <MoreVertical className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit Device</DropdownMenuItem>
                            <DropdownMenuItem>View History</DropdownMenuItem>
                            <DropdownMenuItem>Configure Rules</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='text-red-500'>
                              Remove Device
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className='mt-4 flex items-center justify-between'>
                        <div>
                          <Badge
                            variant={
                              device.status === "online"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {device.status === "online" ? "Online" : "Offline"}
                          </Badge>
                          <p className='mt-1 text-sm'>{device.value}</p>
                        </div>

                        {device.type === "switch" &&
                          device.status === "online" && (
                            <Switch
                              checked={
                                device.value === "On" ||
                                device.value === "Unlocked"
                              }
                              onCheckedChange={() => toggleDevice(device.id)}
                            />
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Device Rules</CardTitle>
              <CardDescription>
                Configure automated rules for your devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                  <div>
                    <p className='font-medium'>Temperature Alert</p>
                    <p className='text-sm text-muted-foreground'>
                      If temperature exceeds 30°C, send alert and turn on
                      cooling
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                  <div>
                    <p className='font-medium'>Auto-Lock</p>
                    <p className='text-sm text-muted-foreground'>
                      Lock all doors at 7:00 PM automatically
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className='flex items-center justify-between p-4 border border-primary rounded-md'>
                  <div>
                    <p className='font-medium'>Motion Lighting</p>
                    <p className='text-sm text-muted-foreground'>
                      Turn on lights when motion is detected
                    </p>
                  </div>
                  <Switch />
                </div>

                <Button variant='outline' className='w-full'>
                  <Plus className='mr-2 h-4 w-4' /> Add New Rule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='sensors' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Sensors</CardTitle>
              <CardDescription>View and manage sensor devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {devices
                  .filter((d) => d.type === "sensor")
                  .map((device) => (
                    <Card
                      key={device.id}
                      className={`border ${
                        device.status === "offline"
                          ? "border-muted bg-muted/30"
                          : "border-primary"
                      }`}
                    >
                      <CardContent className='p-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                              <device.icon className='h-5 w-5 text-primary' />
                            </div>
                            <div>
                              <p className='font-medium'>{device.name}</p>
                              <p className='text-xs text-muted-foreground'>
                                {device.location}
                              </p>
                            </div>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <MoreVertical className='h-4 w-4' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit Device</DropdownMenuItem>
                              <DropdownMenuItem>View History</DropdownMenuItem>
                              <DropdownMenuItem>
                                Configure Rules
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className='text-red-500'>
                                Remove Device
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <div className='mt-4 flex items-center justify-between'>
                          <div>
                            <Badge
                              variant={
                                device.status === "online"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {device.status === "online"
                                ? "Online"
                                : "Offline"}
                            </Badge>
                            <p className='mt-1 text-sm'>{device.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='switches' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Switches</CardTitle>
              <CardDescription>View and control switch devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {devices
                  .filter((d) => d.type === "switch")
                  .map((device) => (
                    <Card
                      key={device.id}
                      className={`border ${
                        device.status === "offline"
                          ? "border-muted bg-muted/30"
                          : "border-primary"
                      }`}
                    >
                      <CardContent className='p-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                              <device.icon className='h-5 w-5 text-primary' />
                            </div>
                            <div>
                              <p className='font-medium'>{device.name}</p>
                              <p className='text-xs text-muted-foreground'>
                                {device.location}
                              </p>
                            </div>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <MoreVertical className='h-4 w-4' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit Device</DropdownMenuItem>
                              <DropdownMenuItem>View History</DropdownMenuItem>
                              <DropdownMenuItem>
                                Configure Rules
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className='text-red-500'>
                                Remove Device
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <div className='mt-4 flex items-center justify-between'>
                          <div>
                            <Badge
                              variant={
                                device.status === "online"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {device.status === "online"
                                ? "Online"
                                : "Offline"}
                            </Badge>
                            <p className='mt-1 text-sm'>{device.value}</p>
                          </div>

                          {device.status === "online" && (
                            <Switch
                              checked={
                                device.value === "On" ||
                                device.value === "Unlocked"
                              }
                              onCheckedChange={() => toggleDevice(device.id)}
                            />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='network' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Network Devices</CardTitle>
              <CardDescription>View and manage network devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {devices
                  .filter((d) => d.type === "network")
                  .map((device) => (
                    <Card
                      key={device.id}
                      className={`border ${
                        device.status === "offline"
                          ? "border-muted bg-muted/30"
                          : "border-primary"
                      }`}
                    >
                      <CardContent className='p-4'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                              <device.icon className='h-5 w-5 text-primary' />
                            </div>
                            <div>
                              <p className='font-medium'>{device.name}</p>
                              <p className='text-xs text-muted-foreground'>
                                {device.location}
                              </p>
                            </div>
                          </div>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <MoreVertical className='h-4 w-4' />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Edit Device</DropdownMenuItem>
                              <DropdownMenuItem>View History</DropdownMenuItem>
                              <DropdownMenuItem>
                                Configure Rules
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className='text-red-500'>
                                Remove Device
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <div className='mt-4 flex items-center justify-between'>
                          <div>
                            <Badge
                              variant={
                                device.status === "online"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {device.status === "online"
                                ? "Online"
                                : "Offline"}
                            </Badge>
                            <p className='mt-1 text-sm'>{device.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
