import { motion } from "motion/react";

export function Visualizer({
  word,
  isValid,
}: {
  word: string[];
  isValid: boolean;
}) {
  const letters = word;

  return (
    <div className="w-4/5 flex items-center justify-center gap-7">
      {letters &&
        letters.map((letter, index) => (
          <motion.div
         
            key={index}
            className={`w-20 h-20 ${
              isValid ? "bg-green-500" : "bg-red-500"
            } rounded-md flex items-center justify-center text-5xl text-white`}
          >
            {letter}
          </motion.div>
        ))}
    </div>
  );
}
