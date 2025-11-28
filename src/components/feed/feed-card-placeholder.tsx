
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { Skeleton } from '../ui/skeleton';


export function FeedCardPlaceholder() {
  return (
    <Card className="flex flex-col relative overflow-hidden">
      <Skeleton className="w-full aspect-video" />
      <CardHeader>
        <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Skeleton className="h-8 w-full" />
      </CardFooter>
    </Card>
  );
}
