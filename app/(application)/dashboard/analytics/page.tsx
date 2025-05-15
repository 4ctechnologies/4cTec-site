"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  AlertTriangle,
  Camera,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for charts
const deviceActivityData = [
  { name: "00:00", cameras: 4, sensors: 12, switches: 8 },
  { name: "03:00", cameras: 3, sensors: 11, switches: 8 },
  { name: "06:00", cameras: 5, sensors: 13, switches: 9 },
  { name: "09:00", cameras: 7, sensors: 18, switches: 12 },
  { name: "12:00", cameras: 8, sensors: 20, switches: 14 },
  { name: "15:00", cameras: 9, sensors: 22, switches: 15 },
  { name: "18:00", cameras: 10, sensors: 24, switches: 16 },
  { name: "21:00", cameras: 7, sensors: 20, switches: 12 },
];

const alertsData = [
  { name: "Mon", critical: 2, warning: 5, info: 8 },
  { name: "Tue", critical: 1, warning: 3, info: 6 },
  { name: "Wed", critical: 3, warning: 7, info: 9 },
  { name: "Thu", critical: 0, warning: 4, info: 7 },
  { name: "Fri", critical: 2, warning: 6, info: 10 },
  { name: "Sat", critical: 1, warning: 2, info: 5 },
  { name: "Sun", critical: 0, warning: 1, info: 3 },
];

const deviceTypeData = [
  { name: "Cameras", value: 12 },
  { name: "Sensors", value: 24 },
  { name: "Switches", value: 16 },
  { name: "Network", value: 8 },
];

const COLORS = ["#f5945c", "#36A2EB", "#FFCE56", "#4BC0C0"];

export default function AnalyticsPage() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Analytics</h1>
          <p className='text-muted-foreground'>
            Performance metrics, heatmaps, and event-based statistics
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <Select defaultValue='7days'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select timeframe' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='24hours'>Last 24 Hours</SelectItem>
              <SelectItem value='7days'>Last 7 Days</SelectItem>
              <SelectItem value='30days'>Last 30 Days</SelectItem>
              <SelectItem value='90days'>Last 90 Days</SelectItem>
            </SelectContent>
          </Select>

          <Button variant='outline'>
            <Download className='mr-2 h-4 w-4' /> Export
          </Button>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Total Devices</CardTitle>
            <BarChart2 className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>60</div>
            <p className='text-xs text-muted-foreground flex items-center'>
              <TrendingUp className='mr-1 h-4 w-4 text-green-500' />
              <span className='text-green-500'>+8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Active Users</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>24</div>
            <p className='text-xs text-muted-foreground flex items-center'>
              <TrendingUp className='mr-1 h-4 w-4 text-green-500' />
              <span className='text-green-500'>+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Alerts (7 days)
            </CardTitle>
            <AlertTriangle className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>42</div>
            <p className='text-xs text-muted-foreground flex items-center'>
              <TrendingDown className='mr-1 h-4 w-4 text-red-500' />
              <span className='text-red-500'>-5%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Camera Events</CardTitle>
            <Camera className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>128</div>
            <p className='text-xs text-muted-foreground flex items-center'>
              <TrendingUp className='mr-1 h-4 w-4 text-green-500' />
              <span className='text-green-500'>+18%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue='overview'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='devices'>Devices</TabsTrigger>
          <TabsTrigger value='alerts'>Alerts</TabsTrigger>
          <TabsTrigger value='users'>Users</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Device Activity</CardTitle>
              <CardDescription>
                24-hour activity across all device types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[300px]'>
                <ChartContainer
                  className='w-full max-h-[300px]'
                  config={{
                    cameras: {
                      label: "Cameras",
                      color: "hsl(24 89% 66%)",
                    },
                    sensors: {
                      label: "Sensors",
                      color: "hsl(220 70% 50%)",
                    },
                    switches: {
                      label: "Switches",
                      color: "hsl(38 92% 50%)",
                    },
                  }}
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart data={deviceActivityData}>
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='name' />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Area
                        type='monotone'
                        dataKey='cameras'
                        stroke='var(--color-cameras)'
                        fill='var(--color-cameras)'
                        fillOpacity={0.2}
                      />
                      <Area
                        type='monotone'
                        dataKey='sensors'
                        stroke='var(--color-sensors)'
                        fill='var(--color-sensors)'
                        fillOpacity={0.2}
                      />
                      <Area
                        type='monotone'
                        dataKey='switches'
                        stroke='var(--color-switches)'
                        fill='var(--color-switches)'
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <div className='grid gap-6 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Alerts by Severity</CardTitle>
                <CardDescription>
                  Weekly breakdown of alerts by severity level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='h-[300px]'>
                  <ChartContainer
                    config={{
                      critical: {
                        label: "Critical",
                        color: "hsl(0 84.2% 60.2%)",
                      },
                      warning: {
                        label: "Warning",
                        color: "hsl(38 92% 50%)",
                      },
                      info: {
                        label: "Info",
                        color: "hsl(220 70% 50%)",
                      },
                    }}
                  >
                    <ResponsiveContainer width='100%' height='100%'>
                      <BarChart data={alertsData}>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey='critical' fill='hsl(0 84.2% 60.2%)' />
                        <Bar dataKey='warning' fill='hsl(38 92% 50%)' />
                        <Bar dataKey='info' fill='hsl(220 70% 50%)' />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>Breakdown of devices by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='h-[300px]'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                      <Pie
                        data={deviceTypeData}
                        cx='50%'
                        cy='50%'
                        labelLine={false}
                        outerRadius={100}
                        fill='#8884d8'
                        dataKey='value'
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {deviceTypeData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='devices' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Device Performance</CardTitle>
              <CardDescription>
                Performance metrics for all connected devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[400px]'>
                {/* Device performance chart would go here */}
                <div className='flex items-center justify-center h-full'>
                  <p className='text-muted-foreground'>
                    Device performance data visualization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='alerts' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Alert Trends</CardTitle>
              <CardDescription>
                Historical alert data and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[400px]'>
                {/* Alert trends chart would go here */}
                <div className='flex items-center justify-center h-full'>
                  <p className='text-muted-foreground'>
                    Alert trends data visualization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='users' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>User login and activity metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[400px]'>
                {/* User activity chart would go here */}
                <div className='flex items-center justify-center h-full'>
                  <p className='text-muted-foreground'>
                    User activity data visualization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
