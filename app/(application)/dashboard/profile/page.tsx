import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileDetails } from "./profile-details";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and manage your profile settings",
};

export default function ProfilePage() {
  return (
    <div className='container mx-auto py-10'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Profile Settings</h1>
        <p className='text-muted-foreground'>
          Manage your account settings and change your credentials.
        </p>
      </div>

      <Tabs defaultValue='details' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='details'>Profile Details</TabsTrigger>
          {/* <TabsTrigger value='username'>Change Username</TabsTrigger> */}
          {/* <TabsTrigger value='password'>Change Password</TabsTrigger> */}
        </TabsList>

        <TabsContent value='details'>
          <Card>
            <CardHeader>
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>
                View your profile information from your current session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileDetails />
            </CardContent>
          </Card>
        </TabsContent>

        {/* <TabsContent value='username'>
          <Card>
            <CardHeader>
              <CardTitle>Change Username</CardTitle>
              <CardDescription>
                Update your username. This will be displayed to other users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='password'>
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password to maintain account security.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordForm />
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}
