"use client";

import { Navigation } from "@/components/navigation";
import { Controls } from "@/components/controls";
import { ProgressBar } from "@/components/progressbar";
import { Visualizer } from "@/components/visualizer";
import { FormEvent, useEffect, useState } from "react";
import { GenerateSteps, Steps } from "@/utils/backtracking";
import { Input } from "@/components/input";
import { BacktrackingTree } from "@/components/backtrackingtree";
import { EditorBack } from "@/components/editor";

export default function Home() {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [word, setWord] = useState<string[]>(["I", "N", "F", "O"]);
  const [totalSteps, setTotalSteps] = useState<number>(0);
  const [steps, setSteps] = useState<Steps[]>();
  const [error, setError] = useState<string>("");
  const [speed, setSpeed] = useState<number>(1);

  const minDelay = 100;
  const maxDelay = 1000;

  const calculatedDelay =
    maxDelay - ((speed - 1) * (maxDelay - minDelay)) / (10 - 1);
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
    setCurrentSteps(0);
    console.log(formatedWord);
    setWord(word.split(""));
  };

  return (
    <main className="bg-[#EDEDED] flex flex-coll">
      <Navigation play={Play} />

      <div className="h-dvh w-full flex flex-row ">
        <div className="flex flex-col w-2/3">
          <div className=" h-3/5 flex items-center justify-center">
            <Visualizer
              steps={steps || []}
              currentStep={currentSteps}
              error={error}
            />
          </div>
          <BacktrackingTree steps={steps || []} currentStep={currentSteps} />{" "}
          {/*{ this the log} */}  
        </div>

        <div className="w-1/3 pt-9">
          <EditorBack />
        </div>
      </div>

      <div className="w-full absolute bottom-0 flex items-center justify-between  h-20 px-10">
        <div className="flex flex-row gap-5 items-center">
          <Controls
            handleSkipStep={handleSkipStep}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            resetSteps={resetSteps}
          />
          <ProgressBar currentSteps={currentSteps} totalSteps={totalSteps} />
        </div>

        <Input setValue={setSpeed} value={speed} />
      </div>
    </main>
  );
}
