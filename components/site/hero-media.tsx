"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Hero background. The poster image renders immediately (and is the LCP
 * element). The looping video is only mounted on wider screens, for visitors
 * who have not asked for reduced motion or reduced data. Everyone else keeps
 * the still image with a slow CSS drift.
 */
export function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
        ?.saveData === true;
    const update = () => setShowVideo(mq.matches && !saveData);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-ink">
      <Image
        src="/video/hero-poster-v2.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        quality={75}
        className={cn(
          "object-cover transition-opacity duration-1000",
          showVideo && videoReady ? "opacity-0" : "opacity-100 animate-drift",
        )}
      />
      {showVideo ? (
        <video
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            videoReady ? "opacity-100" : "opacity-0",
          )}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster-v2.jpg"
          disablePictureInPicture
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/video/hero-v2.webm" type="video/webm" />
          <source src="/video/hero-v2.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
