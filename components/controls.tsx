"use client";

import React from "react";
import {
  Pause,
  Refresh,
  Play,
  Play_and_stop,
} from "@/components/assets/icons/icons";

type Props = {
  handleSkipStep: (duration: number) => void;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  resetSteps: () => void;
};

export function Controls({
  handleSkipStep,
  isPlaying,
  setIsPlaying,
  resetSteps,
}: Props) {
  const handleIsplaying = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <div className="w-36 flex flex-row gap-4">
      <button onClick={() => handleSkipStep(-1)}>
        <Play_and_stop />
      </button>
      <button onClick={handleIsplaying}>
        {isPlaying ?  <Pause /> : <Play className="w-6 h-6 scale-125" />}
      </button>
      <button onClick={() => handleSkipStep(1)}>
        <Play_and_stop className="-rotate-180" />
      </button>
      <button onClick={resetSteps}>
        <Refresh />
      </button>
    </div>
  );
}
