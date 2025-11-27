
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Camera, RefreshCcw, Check, Video, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUser, useStorage } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"></path>
      <circle cx="12" cy="13" r="3"></circle>
    </svg>
  );
}

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  
  const { toast } = useToast();
  const router = useRouter();
  const storage = useStorage();
  const { user } = useUser();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast({
          variant: 'destructive',
          title: 'Camera Not Supported',
          description: 'Your browser does not support camera access.',
        });
        setHasCameraPermission(false);
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings.',
        });
      }
    };

    getCameraPermission();

    return () => {
      // Cleanup: stop video tracks when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [toast]);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    const dataUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(dataUrl);
  };
  
  const handleRetake = () => {
    setCapturedImage(null);
  };
  
  const handleUsePhoto = async () => {
    if (!capturedImage || !storage || !user) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Could not use photo. Missing user or storage service.',
        });
        return;
    }

    setIsUploading(true);

    try {
        const blob = await (await fetch(capturedImage)).blob();
        const fileName = `journal-media-${Date.now()}.jpg`;
        const storageRef = ref(storage, `uploads/${user.uid}/${fileName}`);
        
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Store in localStorage to be picked up by the journal page
        if(typeof window !== 'undefined'){
            localStorage.setItem('lastCapturedImage', downloadURL);
        }

        toast({
            title: 'Success',
            description: 'Photo captured and ready to be attached.',
        });

        router.push('/journal');

    } catch (error) {
        console.error('Upload failed:', error);
        toast({
            variant: 'destructive',
            title: 'Upload Failed',
            description: 'Could not upload the photo. Please try again.',
        });
    } finally {
        setIsUploading(false);
    }
  };


  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-between">
      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white z-10">
        <div className="flex items-center gap-2 text-yellow-400">
          <CameraIcon className="w-5 h-5" />
          <span className="font-semibold text-sm">Pranian Cam</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-white hover:bg-white/20">
          <X className="h-6 w-6" />
        </Button>
      </header>
      
      {/* Viewfinder */}
      <main className="relative flex-1 flex items-center justify-center overflow-hidden">
        {hasCameraPermission === null && (
          <p className="text-white">Requesting camera permission...</p>
        )}
        {hasCameraPermission === false && (
          <p className="text-destructive text-center p-4">Camera access is required. Please enable it in your browser settings and refresh the page.</p>
        )}
        
        <video ref={videoRef} className={`w-full h-full object-cover transition-opacity duration-300 ${capturedImage ? 'opacity-0' : 'opacity-100'}`} autoPlay muted playsInline />
        <canvas ref={canvasRef} className="hidden"></canvas>

        {capturedImage && (
            <div className="absolute inset-0">
                <Image src={capturedImage} alt="Captured image" layout="fill" objectFit="cover" />
            </div>
        )}
        {isUploading && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
                <p className="text-white font-medium">Using Photo...</p>
            </div>
        )}
      </main>
      
      {/* Bottom Controls */}
      <footer className="w-full bg-black/50 backdrop-blur-sm p-4 flex flex-col items-center gap-4 z-10">
        {!capturedImage ? (
          <>
            <div className="flex justify-center items-center w-full">
              <button
                onClick={handleCapture}
                className="w-20 h-20 rounded-full bg-white flex items-center justify-center focus:outline-none ring-4 ring-white/30 ring-offset-4 ring-offset-black"
                aria-label="Capture Photo"
              >
                <div className="w-18 h-18 rounded-full bg-white border-4 border-black"></div>
              </button>
            </div>
            <div className="text-white font-medium text-sm flex gap-6">
              <span className="text-yellow-400">PHOTO</span>
              <span>VIDEO</span>
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center w-full max-w-sm">
            <Button onClick={handleRetake} variant="ghost" className="text-white hover:text-white hover:bg-white/20">
              <RefreshCcw className="mr-2 h-5 w-5" /> Retake
            </Button>
            <Button onClick={handleUsePhoto} className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Check className="mr-2 h-5 w-5" /> Use Photo
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
}
