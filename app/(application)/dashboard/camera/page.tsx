"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
import {
  Camera,
  Maximize2,
  RotateCw,
  ZoomIn,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Define types for the API response
interface AIAnalysisResponse {
  activity: {
    group_gathering: boolean;
    loitering: boolean;
    motion: string;
  };
  detected_objects: Record<string, number>;
  message: string;
  total_frames: number;
}

export default function CameraPage() {
  const [activeCamera, setActiveCamera] = useState("1");
  const [aiDetection, setAiDetection] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<AIAnalysisResponse | null>(
    null
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Progressive loading animation that fills to 95% during analysis
  useEffect(() => {
    if (isAnalyzing) {
      // Reset progress when starting
      setAnalysisProgress(0);

      // Quick initial progress to show something is happening
      const quickStart = setTimeout(() => {
        setAnalysisProgress(30);
      }, 300);

      // Then slower progress up to 95%
      const progressSteps = [
        { value: 45, delay: 800 },
        { value: 60, delay: 1500 },
        { value: 75, delay: 2500 },
        { value: 85, delay: 4000 },
        { value: 95, delay: 6000 },
      ];

      const timeouts: NodeJS.Timeout[] = [];

      progressSteps.forEach((step) => {
        const timeout = setTimeout(() => {
          if (isAnalyzing) {
            // Only update if still analyzing
            setAnalysisProgress(step.value);
          }
        }, step.delay);

        timeouts.push(timeout);
      });

      return () => {
        clearTimeout(quickStart);
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    } else if (analysisData) {
      // When analysis is complete, fill to 100%
      setAnalysisProgress(100);
    }
  }, [isAnalyzing, analysisData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const analyzeVideo = async () => {
    if (!selectedFile) {
      alert("Please select a video file first");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisData(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // send the form data to the server localhost:5003/analyze
      const response = await fetch("http://localhost:5003/analyze", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data: AIAnalysisResponse = await response.json();
      setAnalysisData(data);

      // Set progress to 100% when complete
      setAnalysisProgress(100);

      // Small delay before removing the overlay
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 500);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsAnalyzing(false);
    }
  };

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
            <Label htmlFor='ai-detection'>AI Detection</Label>
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
                  NVIDIA AI Active
                </div>
              )}

              {aiDetection && analysisData && (
                <>
                  {/* Display AI detection boxes based on analysis data */}
                  <div className='absolute top-1/4 left-1/3 w-16 h-24 border-2 border-primary rounded-sm'>
                    <div className='absolute -top-5 left-0 bg-primary text-white text-xs px-1'>
                      Person {analysisData.detected_objects.person}%
                    </div>
                  </div>
                  {analysisData.detected_objects.car > 0 && (
                    <div className='absolute top-1/2 right-1/4 w-24 h-12 border-2 border-yellow-400 rounded-sm'>
                      <div className='absolute -top-5 left-0 bg-yellow-400 text-white text-xs px-1'>
                        Car {analysisData.detected_objects.car}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Analysis progress overlay */}
              {isAnalyzing && (
                <div className='absolute inset-0 bg-black/70 flex flex-col items-center justify-center'>
                  <div className='text-white mb-4'>Analyzing video...</div>
                  <div className='w-64'>
                    <Progress value={analysisProgress} className='h-2' />
                  </div>
                  <div className='text-white/70 text-xs mt-2'>
                    {analysisProgress < 100
                      ? "Processing frames..."
                      : "Analysis complete!"}
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Video Analysis</CardTitle>
              <CardDescription>
                Upload and analyze video footage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4'>
                  <div className='flex-1'>
                    <Label htmlFor='video-upload' className='mb-2 block'>
                      Select Video File
                    </Label>
                    <input
                      id='video-upload'
                      type='file'
                      accept='video/*'
                      onChange={handleFileChange}
                      className='block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-primary/90'
                    />
                  </div>
                  <Button
                    onClick={analyzeVideo}
                    disabled={isAnalyzing || !selectedFile}
                    className='mt-6'
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Video"}
                  </Button>
                </div>

                {analysisData && (
                  <div className='mt-6 space-y-4'>
                    <div>
                      <h3 className='text-lg font-medium'>Analysis Results</h3>
                      <div className='flex justify-between items-center text-sm text-muted-foreground'>
                        <span>
                          Video analyzed: {analysisData.total_frames} frames
                        </span>
                        <Badge variant='outline' className='ml-2'>
                          AI Model v0.5
                        </Badge>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <h4 className='text-md font-medium flex items-center'>
                        <Camera className='mr-2 h-4 w-4' /> Detected Objects
                      </h4>

                      <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {Object.entries(analysisData.detected_objects)
                          .sort(([, countA], [, countB]) => countB - countA)
                          .slice(0, 6) // Show top 6 objects
                          .map(([object, count], i) => (
                            <div
                              key={i}
                              className='flex items-center justify-between p-2 bg-muted/50 rounded-md'
                            >
                              <span className='text-sm capitalize'>
                                {object}
                              </span>
                              <Badge>{count}</Badge>
                            </div>
                          ))}
                      </div>

                      {Object.keys(analysisData.detected_objects).length >
                        6 && (
                        <div className='text-center'>
                          <p className='text-xs'>
                            Total{" "}
                            {Object.keys(analysisData.detected_objects).length}{" "}
                            object types detected!
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className='text-md font-medium mb-2 flex items-center'>
                        <Activity className='mr-2 h-4 w-4' /> Activity Detection
                      </h4>
                      <div className='grid grid-cols-3 gap-2'>
                        <Badge
                          variant={
                            analysisData.activity.group_gathering
                              ? "default"
                              : "outline"
                          }
                        >
                          Group Gathering{" "}
                          {analysisData.activity.group_gathering ? "✓" : "✗"}
                        </Badge>
                        <Badge
                          variant={
                            analysisData.activity.loitering
                              ? "default"
                              : "outline"
                          }
                        >
                          Loitering{" "}
                          {analysisData.activity.loitering ? "✓" : "✗"}
                        </Badge>
                        <Badge variant='secondary'>
                          Motion: {analysisData.activity.motion}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
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
                        className={`w-2 h-2 rounded-full ${camera.status === "Online" ? "bg-green-500" : "bg-red-500"}`}
                      />
                      <span className='text-sm'>
                        Camera {camera.id} - {camera.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs ${camera.status === "Online" ? "text-green-500" : "text-red-500"}`}
                    >
                      {camera.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='pb-3'>
              <div className='flex justify-between items-center'>
                <CardTitle>Detected Objects</CardTitle>
                {analysisData && (
                  <Badge variant='outline' className='ml-2'>
                    {Object.values(analysisData.detected_objects).reduce(
                      (sum, count) => sum + count,
                      0
                    )}{" "}
                    total
                  </Badge>
                )}
              </div>
              <CardDescription>AI-powered object detection</CardDescription>
            </CardHeader>
            <CardContent>
              {analysisData ? (
                <div className='space-y-3'>
                  {Object.entries(analysisData.detected_objects)
                    .sort(([, countA], [, countB]) => countB - countA)
                    .map(([object, count], i) => {
                      // Calculate percentage for the progress bar
                      const total = Object.values(
                        analysisData.detected_objects
                      ).reduce((sum, count) => sum + count, 0);
                      const percentage = Math.round((count / total) * 100);

                      return (
                        <div key={i} className='space-y-1'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3'>
                              <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center'>
                                <Camera className='h-4 w-4 text-primary' />
                              </div>
                              <span className='text-sm capitalize'>
                                {object}
                              </span>
                            </div>
                            <Badge variant='secondary'>{count}</Badge>
                          </div>
                          <Progress value={percentage} className='h-1' />
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className='flex flex-col items-center justify-center py-6 text-center text-muted-foreground'>
                  <AlertTriangle className='h-10 w-10 mb-2' />
                  <p>No analysis data available</p>
                  <p className='text-xs mt-1'>
                    Upload and analyze a video to see detected objects
                  </p>
                </div>
              )}
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
                    className='flex items-center space-x-3 border-b border-border pb-2'
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
