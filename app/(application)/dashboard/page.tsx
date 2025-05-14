import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Camera,
  ToggleLeft,
  Bell,
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-muted-foreground'>
          Welcome to 4C Technologies Enterprise IoT Dashboard
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Total Cameras</CardTitle>
            <Camera className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-xs text-muted-foreground'>
              10 active, 2 offline
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>IoT Devices</CardTitle>
            <ToggleLeft className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>48</div>
            <p className='text-xs text-muted-foreground'>
              42 online, 6 offline
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Active Alerts</CardTitle>
            <Bell className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3</div>
            <p className='text-xs text-muted-foreground'>
              1 critical, 2 warnings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>System Status</CardTitle>
            <Activity className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>Healthy</div>
            <p className='text-xs text-muted-foreground'>
              All systems operational
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue='overview'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='alerts'>Recent Alerts</TabsTrigger>
          <TabsTrigger value='activity'>Activity Log</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>
                Current status of your IoT infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-green-500/20 p-2 rounded-full'>
                      <CheckCircle className='h-5 w-5 text-green-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium'>Network</p>
                      <p className='text-xs text-muted-foreground'>
                        All connections stable
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='bg-yellow-500/20 p-2 rounded-full'>
                      <AlertTriangle className='h-5 w-5 text-yellow-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium'>Storage</p>
                      <p className='text-xs text-muted-foreground'>
                        82% capacity used
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4'>
                    <div className='bg-green-500/20 p-2 rounded-full'>
                      <CheckCircle className='h-5 w-5 text-green-500' />
                    </div>
                    <div>
                      <p className='text-sm font-medium'>Processing</p>
                      <p className='text-xs text-muted-foreground'>
                        NVIDIA AI running optimally
                      </p>
                    </div>
                  </div>
                </div>

                <div className='pt-4'>
                  <h4 className='text-sm font-medium mb-3'>Recent Activity</h4>
                  <div className='space-y-3'>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className='flex items-center justify-between border-b border-primary pb-2'
                      >
                        <div className='flex items-center space-x-3'>
                          <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                            <Camera className='h-4 w-4 text-primary' />
                          </div>
                          <div>
                            <p className='text-sm'>
                              Motion detected on Camera {i}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                              {i * 10} minutes ago
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='alerts' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Alerts from the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <div className='bg-red-500/20 p-2 rounded-full'>
                    <XCircle className='h-5 w-5 text-red-500' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium'>
                        Critical: Unauthorized Access Attempt
                      </p>
                      <span className='text-xs text-muted-foreground'>
                        30 min ago
                      </span>
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      Multiple failed login attempts detected from IP
                      192.168.1.45
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='bg-yellow-500/20 p-2 rounded-full'>
                    <AlertTriangle className='h-5 w-5 text-yellow-500' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium'>
                        Warning: Temperature Threshold Exceeded
                      </p>
                      <span className='text-xs text-muted-foreground'>
                        2 hours ago
                      </span>
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      Device TH-103 reported temperature of 85°C (threshold:
                      80°C)
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='bg-yellow-500/20 p-2 rounded-full'>
                    <AlertTriangle className='h-5 w-5 text-yellow-500' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium'>
                        Warning: Camera 2 Offline
                      </p>
                      <span className='text-xs text-muted-foreground'>
                        5 hours ago
                      </span>
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      Camera 2 in Warehouse B has been offline for 15 minutes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='activity' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>
                Recent system and user activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                {[
                  {
                    time: "09:45 AM",
                    user: "System",
                    action: "Automatic backup completed",
                  },
                  {
                    time: "09:32 AM",
                    user: "Admin",
                    action: "Updated device configuration for TH-103",
                  },
                  {
                    time: "09:15 AM",
                    user: "System",
                    action: "Motion detected on Camera 3",
                  },
                  {
                    time: "08:50 AM",
                    user: "John Doe",
                    action: "Logged in to dashboard",
                  },
                  {
                    time: "08:30 AM",
                    user: "System",
                    action: "Daily system health check completed",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className='flex items-center justify-between border-b border-primary pb-2'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                        <span className='text-xs font-medium text-primary'>
                          {activity.user.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className='text-sm'>{activity.action}</p>
                        <p className='text-xs text-muted-foreground'>
                          By {activity.user}
                        </p>
                      </div>
                    </div>
                    <span className='text-xs text-muted-foreground'>
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
