"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface UserProfile {
  prefered_name?: string;
  firstname?: string;
  email?: string;
  username?: string;
  lastname?: string;
  picture?: string;
}

export function ProfileDetails() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<UserProfile>({
    prefered_name: session?.user?.preferred_username,
    firstname: session?.user?.given_name,
    email: session?.user?.email,
    username: session?.user?.username,
    lastname: session?.user?.family_name,
    picture: session?.user?.picture,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setProfile({
      prefered_name: session?.user?.preferred_username,
      firstname: session?.user?.given_name,
      email: session?.user?.email,
      username: session?.user?.username,
      lastname: session?.user?.family_name,
      picture: session?.user?.picture,
    });
    setLoading(false);
  }, [session]);
  if (loading) {
    return (
      <div className='flex justify-center py-8'>
        Loading profile information...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className='flex justify-center py-8'>
        Unable to load profile information.
      </div>
    );
  }

  if (!session) return <p>User is not logged in</p>;

  return (
    <div className='space-y-6'>
      <div className='flex flex-col items-center sm:flex-row sm:items-start gap-6'>
        <Image
          src={profile.picture || "/placeholder.png"}
          alt={profile.prefered_name || "Profile"}
          width={100}
          height={100}
          className='w-24 h-24 rounded-lg'
        />

        <div className='space-y-1 text-center self-center sm:text-left'>
          <h3 className='text-2xl font-bold'>{profile.firstname}</h3>
          <p className='text-muted-foreground'>{profile.lastname}</p>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label>Email</Label>
                <div className='rounded-md border px-4 py-3 font-mono text-sm'>
                  {profile.email}
                </div>
              </div>

              <div className='space-y-2'>
                <Label>Username</Label>
                <div className='rounded-md border px-4 py-3 font-mono text-sm'>
                  {profile.username}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <Label>First Name</Label>
                <div className='rounded-md border px-4 py-3 text-sm'>
                  {profile.firstname}
                </div>
              </div>

              <div className='space-y-2'>
                <Label>Last Name</Label>
                <div className='rounded-md border px-4 py-3 text-sm'>
                  {profile.lastname}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
