"use client";

import { Controls } from "@/components/controls";
import { ProgressBar } from "@/components/progressbar";
import { Visualizer } from "@/components/visualizer";
import { FormEvent, useEffect, useRef, useState } from "react";
import { GenerateSteps, Steps } from "@/utils/backtracking";
import { Input } from "@/components/input";
import { BacktrackingTree } from "@/components/backtrackingtree";
import { EditorBack } from "@/components/editor";
import { SpeedIcon } from "@/components/assets/icons/icons";
import { useIsClickedOutside } from "@/hooks/clickoutSideofDiv";
import { Wordinput } from "@/components/wordinput";

export default function Home() {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [word, setWord] = useState<string[]>(["I", "N", "F", "O"]);
  const [totalSteps, setTotalSteps] = useState<number>(10);
  const [steps, setSteps] = useState<Steps[]>();
  const [error, setError] = useState<string>("");
  const [speed, setSpeed] = useState<number>(1);
  const [showSpeed, setShowSpeed] = useState<boolean>(false);

  const speedInput = useRef<HTMLDivElement>(null);
  const minDelay = 100;
  const maxDelay = 1000;

  const calculatedDelay = maxDelay - ((speed - 1) * (maxDelay - minDelay)) / 9;
  console.log(calculatedDelay);
  useEffect(() => {
    const result = GenerateSteps(word);
    console.log(result);
    setTotalSteps(result.length);
    setSteps(result);

    if (!isPlaying) return;

    if (currentSteps < totalSteps) {
      const timeout = setTimeout(() => {
        setCurrentSteps((prev) => prev + 1);
      }, calculatedDelay);

      return () => clearTimeout(timeout);
    }
  }, [word, currentSteps, totalSteps, isPlaying, calculatedDelay]);

  const handleSkipStep = (duration: number) => {
    setCurrentSteps(() => Math.max(currentSteps + duration, 0));
  };

  const resetSteps = () => {
    setCurrentSteps(0);
  };

  const Play = (event: FormEvent<HTMLFormElement>) => {
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
    setCurrentSteps(0);
    console.log(formatedWord);
    setWord(word.split(""));
  };

  useIsClickedOutside(speedInput, () => setShowSpeed(false));
  return (
    <main className="bg-[#EDEDED] flex flex-col h-dvh ">
      <div className="w-full h-full flex flex-row ">
        <div className="flex flex-col w-full">
          <Visualizer
            steps={steps || []}
            currentStep={currentSteps}
            error={error}
          />
          <BacktrackingTree steps={steps || []} currentStep={currentSteps} />
        </div>
        <EditorBack />
      </div>

      <div className="absolute bottom-0 w-full h-16 flex justify-between items-center px-32  bg-white">
        <div>
          <Wordinput Play={Play} />
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <div className="flex flex-col gap-4 ">
            {showSpeed && (
              <Input
                ref={speedInput}
                setValue={setSpeed}
                value={speed}
                className="absolute top-0 -translate-y-[100%]"
              />
            )}
            <button onClick={() => setShowSpeed((prev) => !prev)}>
              <SpeedIcon />
            </button>
          </div>
          <div className="flex flex-row gap-8 items-center justify-center">
            <Controls
              handleSkipStep={handleSkipStep}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              resetSteps={resetSteps}
            />
            <ProgressBar
              currentSteps={calculatedDelay}
              totalSteps={totalSteps}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
