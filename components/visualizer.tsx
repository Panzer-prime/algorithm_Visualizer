import { motion } from "motion/react";
import { Steps } from "@/utils/backtracking";

export function Visualizer({
  steps,
  currentStep,
  error,
}: {
  steps: Steps[];
  currentStep: number;
  error: string;
}) {
  const step = steps[currentStep];

  return (
    <div className="w-full h-full flex items-center justify-center gap-7">
      {!error ? (
        step &&
        step.word.map((item, index) => (
          <motion.div
            
            key={index}
            className={`w-20 h-20 ${
              item.isValid ? "bg-green-500" : "bg-red-500"
            } rounded-md flex items-center justify-center text-5xl text-white`}
          >
            {item.letter}
          </motion.div>
        ))
      ) : (
        <p className="text-5xl font-semibold text-red-500">Error :(</p>
      )}
    </div>
  );
}

{
  /* <motion.div
            key={index}
            className={`w-20 h-20 ${
              letter.isValid ? "bg-green-500" : "bg-red-500"
            } rounded-md flex items-center justify-center text-5xl text-white`}
          >
            {letter.letter}
          </motion.div> */
}
