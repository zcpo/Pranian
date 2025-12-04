
import { NextResponse } from 'next/server';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { podcastEpisodes } from '@/lib/podcasts';

export async function GET() {
  const allContent = [
    ...meditations.map(item => ({ ...item, type: 'Audio Meditation', href: `/library/meditation/${item.slug}` })),
    ...videoMeditations.map(item => ({ ...item, type: 'Video Meditation', href: `/library/video-meditation/${item.slug}` })),
    ...videos.map(item => ({ ...item, type: 'Video', href: `/library/video/${item.slug}` })),
    ...podcastEpisodes.map(item => ({ ...item, imageId: 'product-podcast', type: 'Podcast', href: `/library/podcast/${item.slug}` })),
  ];

  return NextResponse.json({ allContent });
}
