'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';
import VideoSection from '@/components/VideoSection';
import KeyServices from '@/components/KeyServices';
import WebPreviews from '@/components/WebPreviews';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen font-sans text-white">
      <ScrollyCanvas />
      <Projects />
      <VideoSection />
      <KeyServices />
      {/* <WebPreviews /> */}
    </main>
  );
}
