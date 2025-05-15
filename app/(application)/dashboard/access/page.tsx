/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  UserPlus,
  Search,
  MoreVertical,
  Shield,
  Eye,
  Check,
  X,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

export default function AccessPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@4ctech.com",
      role: "Admin",
      status: "Active",
      lastLogin: "Today, 09:42 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@4ctech.com",
      role: "Manager",
      status: "Active",
      lastLogin: "Yesterday, 05:30 PM",
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@4ctech.com",
      role: "Technician",
      status: "Active",
      lastLogin: "2 days ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@4ctech.com",
      role: "Viewer",
      status: "Inactive",
      lastLogin: "1 week ago",
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael@4ctech.com",
      role: "Manager",
      status: "Active",
      lastLogin: "Today, 10:15 AM",
    },
  ]);

  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      description: "Full system access",
      permissions: ["View", "Edit", "Delete", "Manage Users"],
    },
    {
      id: 2,
      name: "Manager",
      description: "Department level access",
      permissions: ["View", "Edit", "Limited Delete"],
    },
    {
      id: 3,
      name: "Technician",
      description: "Device management access",
      permissions: ["View", "Limited Edit"],
    },
    {
      id: 4,
      name: "Viewer",
      description: "Read-only access",
      permissions: ["View"],
    },
  ]);

  const [showNewUserDialog, setShowNewUserDialog] = useState(false);
  const [showNewRoleDialog, setShowNewRoleDialog] = useState(false);

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Access Management
          </h1>
          <p className='text-muted-foreground'>
            Admin-level role management via WSO2 Asgardeo
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <Button onClick={() => setShowNewUserDialog(true)}>
            <UserPlus className='mr-2 h-4 w-4' /> Add User
          </Button>
        </div>
      </div>

      <Tabs defaultValue='users'>
        <TabsList>
          <TabsTrigger value='users'>Users</TabsTrigger>
          <TabsTrigger value='roles'>Roles</TabsTrigger>
          <TabsTrigger value='permissions'>Permissions</TabsTrigger>
          <TabsTrigger value='logs'>Access Logs</TabsTrigger>
        </TabsList>

        <TabsContent value='users' className='space-y-6'>
          <Card className='max-w-dvw'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage user accounts and access levels
                  </CardDescription>
                </div>

                <div className='relative w-64'>
                  <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                  <Input
                    type='search'
                    placeholder='Search users...'
                    className='pl-8'
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className='font-medium'>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant='outline'>{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell className='text-right'>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='icon'>
                              <MoreVertical className='h-4 w-4' />
                              <span className='sr-only'>Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit User</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuItem>Reset Password</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='text-red-500'>
                              {user.status === "Active"
                                ? "Deactivate User"
                                : "Activate User"}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Dialog open={showNewUserDialog} onOpenChange={setShowNewUserDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new user account and assign permissions
                </DialogDescription>
              </DialogHeader>

              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    placeholder='Full Name'
                    className='col-span-3'
                  />
                </div>

                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='email@example.com'
                    className='col-span-3'
                  />
                </div>

                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='role' className='text-right'>
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger className='col-span-3'>
                      <SelectValue placeholder='Select role' />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role.id} value={role.name}>
                          {role.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='password' className='text-right'>
                    Password
                  </Label>
                  <div className='relative col-span-3'>
                    <Input id='password' type='password' className='pr-10' />
                    <Button
                      variant='ghost'
                      size='icon'
                      className='absolute right-0 top-0'
                    >
                      <Eye className='h-4 w-4' />
                    </Button>
                  </div>
                </div>

                <div className='grid grid-cols-4 items-center gap-4'>
                  <div className='text-right'>
                    <Label htmlFor='status'>Status</Label>
                  </div>
                  <div className='flex items-center space-x-2 col-span-3'>
                    <Switch id='status' defaultChecked />
                    <Label htmlFor='status'>Active</Label>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant='outline'
                  onClick={() => setShowNewUserDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowNewUserDialog(false)}>
                  Create User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value='roles' className='space-y-6'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Role Management</CardTitle>
                  <CardDescription>
                    Manage roles and associated permissions
                  </CardDescription>
                </div>

                <Button onClick={() => setShowNewRoleDialog(true)}>
                  <Shield className='mr-2 h-4 w-4' /> Add Role
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                {roles.map((role) => (
                  <Card key={role.id}>
                    <CardHeader>
                      <div className='flex items-center justify-between'>
                        <CardTitle>{role.name}</CardTitle>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant='ghost' size='icon'>
                              <MoreVertical className='h-4 w-4' />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align='end'>
                            <DropdownMenuItem>Edit Role</DropdownMenuItem>
                            <DropdownMenuItem>Clone Role</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='text-red-500'>
                              Delete Role
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-2'>
                        <h4 className='text-sm font-medium'>Permissions:</h4>
                        <div className='flex flex-wrap gap-2'>
                          {role.permissions.map((permission, i) => (
                            <Badge key={i} variant='outline'>
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className='border-t px-6 py-4'>
                      <Button variant='outline' size='sm'>
                        Edit Permissions
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Dialog open={showNewRoleDialog} onOpenChange={setShowNewRoleDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Role</DialogTitle>
                <DialogDescription>
                  Create a new role with custom permissions
                </DialogDescription>
              </DialogHeader>

              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='role-name' className='text-right'>
                    Role Name
                  </Label>
                  <Input
                    id='role-name'
                    placeholder='Role Name'
                    className='col-span-3'
                  />
                </div>

                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='description' className='text-right'>
                    Description
                  </Label>
                  <Input
                    id='description'
                    placeholder='Role description'
                    className='col-span-3'
                  />
                </div>

                <div className='grid grid-cols-4 gap-4'>
                  <Label className='text-right pt-2'>Permissions</Label>
                  <div className='col-span-3 space-y-2'>
                    {[
                      "View Dashboard",
                      "Manage Devices",
                      "View Analytics",
                      "Manage Users",
                      "Configure Alerts",
                      "View Cameras",
                      "Edit Settings",
                    ].map((perm, i) => (
                      <div key={i} className='flex items-center space-x-2'>
                        <Switch id={`perm-${i}`} />
                        <Label htmlFor={`perm-${i}`}>{perm}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant='outline'
                  onClick={() => setShowNewRoleDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowNewRoleDialog(false)}>
                  Create Role
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        <TabsContent value='permissions' className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
              <CardDescription>
                Detailed view of permissions by role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Permission</TableHead>
                    <TableHead className='text-center'>Admin</TableHead>
                    <TableHead className='text-center'>Manager</TableHead>
                    <TableHead className='text-center'>Technician</TableHead>
                    <TableHead className='text-center'>Viewer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    "View Dashboard",
                    "Manage Devices",
                    "Configure Rules",
                    "View Analytics",
                    "Export Reports",
                    "Manage Users",
                    "View Camera Feeds",
                    "Configure Alerts",
                    "System Settings",
                    "Delete Data",
                  ].map((permission, i) => (
                    <TableRow key={i}>
                      <TableCell className='font-medium'>
                        {permission}
                      </TableCell>
                      <TableCell className='text-center'>
                        <Check className='h-4 w-4 mx-auto text-green-500' />
                      </TableCell>
                      <TableCell className='text-center'>
                        {i < 8 ? (
                          <Check className='h-4 w-4 mx-auto text-green-500' />
                        ) : (
                          <X className='h-4 w-4 mx-auto text-red-500' />
                        )}
                      </TableCell>
                      <TableCell className='text-center'>
                        {i < 5 ? (
                          <Check className='h-4 w-4 mx-auto text-green-500' />
                        ) : (
                          <X className='h-4 w-4 mx-auto text-red-500' />
                        )}
                      </TableCell>
                      <TableCell className='text-center'>
                        {i === 0 || i === 3 || i === 6 ? (
                          <Check className='h-4 w-4 mx-auto text-green-500' />
                        ) : (
                          <X className='h-4 w-4 mx-auto text-red-500' />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='logs' className='space-y-6'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Access Logs</CardTitle>
                  <CardDescription>
                    User login and activity history
                  </CardDescription>
                </div>

                <div className='flex flex-col space-y-2 items-end sm:flex-row sm:items-center space-x-2'>
                  <Select defaultValue='today'>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Select timeframe' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='today'>Today</SelectItem>
                      <SelectItem value='yesterday'>Yesterday</SelectItem>
                      <SelectItem value='week'>Last 7 Days</SelectItem>
                      <SelectItem value='month'>Last 30 Days</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant='outline'>
                    <Download className='mr-2 h-4 w-4' /> Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      user: "John Doe",
                      action: "Login",
                      ip: "192.168.1.101",
                      time: "Today, 09:42 AM",
                      status: "Success",
                    },
                    {
                      user: "Jane Smith",
                      action: "User Creation",
                      ip: "192.168.1.102",
                      time: "Today, 09:30 AM",
                      status: "Success",
                    },
                    {
                      user: "Michael Wilson",
                      action: "Permission Change",
                      ip: "192.168.1.103",
                      time: "Today, 09:15 AM",
                      status: "Success",
                    },
                    {
                      user: "Unknown",
                      action: "Login Attempt",
                      ip: "203.0.113.45",
                      time: "Today, 08:52 AM",
                      status: "Failed",
                    },
                    {
                      user: "Robert Johnson",
                      action: "Password Reset",
                      ip: "192.168.1.104",
                      time: "Today, 08:30 AM",
                      status: "Success",
                    },
                    {
                      user: "Emily Davis",
                      action: "Login",
                      ip: "192.168.1.105",
                      time: "Yesterday, 05:45 PM",
                      status: "Success",
                    },
                    {
                      user: "John Doe",
                      action: "Device Configuration",
                      ip: "192.168.1.101",
                      time: "Yesterday, 04:30 PM",
                      status: "Success",
                    },
                    {
                      user: "Unknown",
                      action: "Login Attempt",
                      ip: "198.51.100.23",
                      time: "Yesterday, 02:15 PM",
                      status: "Failed",
                    },
                  ].map((log, i) => (
                    <TableRow key={i}>
                      <TableCell className='font-medium'>{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell>{log.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            log.status === "Success" ? "default" : "destructive"
                          }
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
