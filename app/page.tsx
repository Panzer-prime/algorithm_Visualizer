"use client";

import { Navigation } from "@/components/navigation";
import { Controls } from "@/components/controls";
import { BacktrackingTree } from "@/components/backtrackingtree";
import { ProgressBar } from "@/components/progressbar";
import { Visualizer } from "@/components/visualizer";
import { FormEvent, useEffect, useState } from "react";
import { GenerateSteps, Steps } from "@/utils/backtracking";
import { ErrorWindow } from "@/components/error";

export default function Home() {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [word, setWord] = useState<string[]>(["I", "N", "F", "O"]);
  const [totalSteps, setTotalSteps] = useState<number>(0);
  const [steps, setSteps] = useState<Steps[]>();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const result = GenerateSteps(word);
    console.log(result);
    setTotalSteps(result.length);
    setSteps(result);

    if (!isPlaying) return;

    if (currentSteps < totalSteps) {
      const timeout = setTimeout(() => {
        setCurrentSteps((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [word, currentSteps, totalSteps, isPlaying]);

  const handleSkipStep = (duration: number) => {
    setCurrentSteps(() => Math.min(currentSteps + duration, totalSteps));
  };

  const resetSteps = () => {
    setCurrentSteps(0);
  };

  const Play = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const word: string = formData.get("word") as string;
    const formatedWord = word.toUpperCase();

    if (formatedWord.length > 5) {
      setError("Cuvantul nu poate depasi 5 caractere ");
      setTotalSteps(0);
      return;
    }
    console.log(formatedWord);
    setWord(word.split(""));
  };

  return (
    <main className="bg-[#EDEDED]">
      {error && <ErrorWindow error={error} />}
      <Navigation play={Play} />
      <div className="w-full flex flex-row">
        <Visualizer
          steps={steps || []}
          currentStep={currentSteps}
          error={error}
        />
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
