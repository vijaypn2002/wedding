'use client';

import Hero from '@/components/home/Hero';
import Countdown from '@/components/home/Countdown';
import Quote from '@/components/home/Quote';
import Programs from '@/components/home/Programs';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Countdown />
      <Quote />
      <Programs />
      <MapSection />
    </div>
  );
}
