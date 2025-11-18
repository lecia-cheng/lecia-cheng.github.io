'use client';

import Image from 'next/image';
import ivey from '@/assets/ivey.jpg';
import wai from '@/assets/wai.jpg';
import tangyrewards from '@/assets/tangyrewards.jpg';
import reRecorder from '@/assets/re-recorder.jpg';

const images = [
  { src: ivey, alt: 'Ivey' },
  { src: wai, alt: 'WAI' },
  { src: tangyrewards, alt: 'Tangy Rewards' },
  { src: reRecorder, alt: 'Re-recorder' },
];

export default function ImageCarousel() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-5 animate-scroll-slow">
        {duplicatedImages.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <Image 
              src={img.src} 
              alt={img.alt} 
              className="w-[320px] h-[240px] md:w-[400px] md:h-[300px] object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

