import { Steps } from "@/utils/backtracking";
import { useEffect, useRef } from "react";

type Props = {
  steps: Steps[];
  currentStep: number;
};

export function BacktrackingTree({ steps, currentStep }: Props) {
  const windowRef = useRef<HTMLDivElement>(null);
  const logs = steps.slice(0, currentStep + 1);
  console.log("the logs ", logs);

  useEffect(() => {
    const elemet = windowRef.current;

    if (elemet) {
      elemet.scrollTop = elemet.scrollHeight;
    }
  }, [logs]);

  return (
    <div
      className="h-1/3 flex items-center p-4 overflow-auto gap-4 flex-col rounded-md"
      ref={windowRef}
    >
      {logs.map((log, index) => {
        const currentWord = log.word.map((w) => w.letter).join("");
        const isSolution = log.word.every((w) => w.isValid); 

        return (
          <p
            key={index}
            className={`text-lg font-medium w-full border-2 rounded-md p-3 ${
              isSolution
                ? "text-green-500 border-green-500"
                : "text-red-500 border-red-500"
            }`}
          >
            {isSolution
              ? `Solution: ${currentWord}`
              : `Invalid: ${currentWord}`}
          </p>
        );
      })}
    </div>
  );
}
