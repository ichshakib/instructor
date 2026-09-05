"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { speechService } from "../lib/speech";

interface AudioButtonProps {
  text: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  rate?: number;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  label,
  size = "sm",
  className = "",
  rate = 0.88,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    speechService.speak(text, {
      rate,
      onStart: () => setIsPlaying(true),
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    });
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={`Listen to German pronunciation: "${text}"`}
      className={`inline-flex items-center gap-1.5 transition-all duration-150 cursor-pointer select-none rounded-lg font-semibold ${
        isPlaying
          ? "bg-amber-600 text-white shadow-xs scale-105"
          : "bg-neutral-100 hover:bg-amber-100 text-neutral-700 hover:text-amber-900"
      } ${
        label
          ? "px-2.5 py-1 text-xs"
          : "p-1.5"
      } ${className}`}
    >
      <Volume2
        className={`${iconSizes[size]} ${isPlaying ? "animate-pulse" : ""}`}
      />
      {label && <span>{isPlaying ? "Playing..." : label}</span>}
    </button>
  );
};
