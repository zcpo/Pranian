import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)]">
      <LoaderCircle className="h-24 w-24 animate-spin text-primary" />
    </div>
  );
}
