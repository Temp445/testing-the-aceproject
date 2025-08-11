"use client";

import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import tutorial from "@/assets/videos/ace_project_tutorial.mp4"
export default function DemoButton() {
  const t = useTranslations('Hero')
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);

  const handleDemoClick = () => {
    setShowVideoOverlay(true);
  };

  const closeVideoOverlay = () => {
    setShowVideoOverlay(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "videoOverlay") {
      closeVideoOverlay();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <button
          onClick={handleDemoClick}
          className="flex items-center justify-center gap-2 px-6 py-2 md:py-2 2xl:py-3 bg-[#077A7D] text-white rounded hover:scale-105 transition-transform shadow-lg"
          aria-label="Watch demo video"
        >
          <span className="md:text-lg xl:text-md font-semibold">{t('Buttons.Demo')}</span>
        </button>

        {showVideoOverlay && (
          <div
            id="videoOverlay"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[300]"
            onClick={handleOverlayClick}
          >
            <div className="relative w-full max-w-5xl mx-4 aspect-video">
              <button
                onClick={closeVideoOverlay}
                className="absolute -top-10 right-0 text-white text-4xl hover:text-red-500 transition"
                aria-label="Close video"
              >
                <IoCloseCircleOutline />
              </button>
              <div className="rounded-lg overflow-hidden shadow-2xl h-full">
                {/* <iframe
                  className="w-full h-full rounded-lg"
                  src="/"
                  title="Demo Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe> */}
                <video
                  className="w-full h-full rounded-lg"
                  src={tutorial}
                  controls
                  autoPlay
                  loop
                  preload="auto"
                ></video>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
