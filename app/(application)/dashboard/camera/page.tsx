"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Camera, Maximize2, RotateCw, ZoomIn } from "lucide-react";

export default function CameraPage() {
  const [activeCamera, setActiveCamera] = useState("1");
  const [aiDetection, setAiDetection] = useState(true);

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Camera Feed</h1>
          <p className='text-muted-foreground'>
            NVIDIA-enhanced visual feed with incident detection
          </p>
        </div>

        <div className='flex items-center space-x-4'>
          <Select value={activeCamera} onValueChange={setActiveCamera}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select Camera' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>Camera 1 - Entrance</SelectItem>
              <SelectItem value='2'>Camera 2 - Warehouse</SelectItem>
              <SelectItem value='3'>Camera 3 - Parking</SelectItem>
              <SelectItem value='4'>Camera 4 - Office</SelectItem>
            </SelectContent>
          </Select>

          <div className='flex items-center space-x-2'>
            <Switch
              id='ai-detection'
              checked={aiDetection}
              onCheckedChange={setAiDetection}
            />
            <Label htmlFor='ai-detection'>AI Detection<sub>Powerd by NVIDIA</sub></Label>
          </div>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        <div className='md:col-span-2 space-y-6'>
          <Card className='overflow-hidden'>
            <div className='relative aspect-video bg-black'>
              <div className='absolute inset-0 flex items-center justify-center'>
                <Camera className='h-16 w-16 text-muted-foreground opacity-20' />
              </div>
              {/* This would be your actual camera feed */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

              <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
                <div>
                  <span className='text-white font-medium'>
                    Camera {activeCamera}
                  </span>
                  <div className='flex items-center space-x-2'>
                    <span className='text-xs text-white/70'>Live</span>
                    <span className='relative flex h-2 w-2'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-red-500'></span>
                    </span>
                  </div>
                </div>

                <div className='flex items-center space-x-2'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white hover:bg-white/10'
                  >
                    <ZoomIn className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white hover:bg-white/10'
                  >
                    <RotateCw className='h-4 w-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white hover:bg-white/10'
                  >
                    <Maximize2 className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {aiDetection && (
                <div className='absolute top-4 right-4 bg-primary/90 text-white text-xs px-2 py-1 rounded'>
                  AI is Active
                </div>
              )}

              {aiDetection && (
                <>
                  {/* Simulated AI detection boxes */}
                  <div className='absolute top-1/4 left-1/3 w-16 h-24 border-2 border-primary rounded-sm'>
                    <div className='absolute -top-5 left-0 bg-primary text-white text-xs px-1'>
                      Person 98%
                    </div>
                  </div>
                  <div className='absolute top-1/2 right-1/4 w-24 h-12 border-2 border-yellow-400 rounded-sm'>
                    <div className='absolute -top-5 left-0 bg-yellow-400 text-white text-xs px-1'>
                      Object 87%
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Camera Controls</CardTitle>
              <CardDescription>
                Adjust camera settings and controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <Label>Brightness</Label>
                    <Slider defaultValue={[70]} max={100} step={1} />
                  </div>

                  <div className='space-y-2'>
                    <Label>Contrast</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>

                  <div className='space-y-2'>
                    <Label>Zoom</Label>
                    <Slider defaultValue={[0]} max={100} step={1} />
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <Label htmlFor='motion-detection'>Motion Detection</Label>
                    <Switch id='motion-detection' defaultChecked />
                  </div>

                  <div className='flex items-center justify-between'>
                    <Label htmlFor='night-vision'>Night Vision</Label>
                    <Switch id='night-vision' defaultChecked />
                  </div>

                  <div className='flex items-center justify-between'>
                    <Label htmlFor='audio'>Audio Recording</Label>
                    <Switch id='audio' />
                  </div>

                  <div className='flex items-center justify-between'>
                    <Label htmlFor='facial-recognition'>
                      Facial Recognition
                    </Label>
                    <Switch id='facial-recognition' defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Camera List</CardTitle>
              <CardDescription>All connected cameras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                {[
                  { id: "1", name: "Entrance", status: "Online" },
                  { id: "2", name: "Warehouse", status: "Online" },
                  { id: "3", name: "Parking", status: "Online" },
                  { id: "4", name: "Office", status: "Offline" },
                  { id: "5", name: "Server Room", status: "Online" },
                ].map((camera) => (
                  <div
                    key={camera.id}
                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                      activeCamera === camera.id
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveCamera(camera.id)}
                  >
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          camera.status === "Online"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className='text-sm'>
                        Camera {camera.id} - {camera.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs ${
                        camera.status === "Online"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {camera.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Detections</CardTitle>
              <CardDescription>AI-powered incident detection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-3'>
                {[
                  {
                    time: "10:23 AM",
                    camera: "1",
                    event: "Person detected",
                    confidence: 98,
                  },
                  {
                    time: "10:15 AM",
                    camera: "3",
                    event: "Vehicle detected",
                    confidence: 95,
                  },
                  {
                    time: "09:52 AM",
                    camera: "2",
                    event: "Motion detected",
                    confidence: 87,
                  },
                  {
                    time: "09:30 AM",
                    camera: "1",
                    event: "Person detected",
                    confidence: 92,
                  },
                  {
                    time: "09:15 AM",
                    camera: "5",
                    event: "Unusual activity",
                    confidence: 76,
                  },
                ].map((detection, i) => (
                  <div
                    key={i}
                    className='flex items-center space-x-3 border-b border-primary pb-2'
                  >
                    <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                      <Camera className='h-4 w-4 text-primary' />
                    </div>
                    <div>
                      <p className='text-sm'>{detection.event}</p>
                      <div className='flex items-center space-x-2'>
                        <p className='text-xs text-muted-foreground'>
                          Camera {detection.camera}
                        </p>
                        <span className='text-xs text-muted-foreground'>•</span>
                        <p className='text-xs text-muted-foreground'>
                          {detection.time}
                        </p>
                        <span className='text-xs text-muted-foreground'>•</span>
                        <p className='text-xs text-primary'>
                          {detection.confidence}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
