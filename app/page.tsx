"use client";

import { Navigation } from "@/components/navigation";
import { Controls } from "@/components/controls";
import { BacktrackingTree } from "@/components/backtrackingtree";
import { ProgressBar } from "@/components/progressbar";
import { Visualizer } from "@/components/visualizer";
import { FormEvent, useEffect, useState } from "react";

export default function Home() {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [word, setWord] = useState<string[]>(["I", "N", "F", "O"]);
  const [isValid, setIsValid] = useState<boolean>(false);
  const totalSteps = 4;

  useEffect(() => {
    if (!isPlaying) return;
    if (currentSteps < totalSteps) {
      const timeout = setTimeout(() => {
        setCurrentSteps((prev) => prev + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentSteps, totalSteps, isPlaying]);

  const handleSkipStep = (duration: number) => {
    setCurrentSteps(() => currentSteps + duration);
  };

  const resetSteps = () => {
    setCurrentSteps(0);
  };

  const Play = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const word: string = formData.get("word") as string;
    const formatedWord = word.toUpperCase();
    console.log(formatedWord)
  };

  return (
    <main className="bg-[#EDEDED]">
      <Navigation play={Play} />
      <div className="w-full flex flex-row">
        <Visualizer word={word} isValid={isValid} />
        <BacktrackingTree />
      </div>

      <div className="w-full absolute bottom-0 flex items-center justify-center  h-20">
        <div className="flex flex-row gap-5 items-center">
          <Controls
            handleSkipStep={handleSkipStep}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            resetSteps={resetSteps}
          />
          <ProgressBar currentSteps={currentSteps} totalSteps={totalSteps} />
        </div>
      </div>
    </main>
  );
}
