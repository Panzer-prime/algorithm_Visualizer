import { motion } from "motion/react";

export const ErrorWindow = ({ error }: { error: string }) => {
  return (
    <motion.div className="absolute top-32 w-[400px] h-40 border-4 border-l-0 rounded-l-none rounded-md border-red-500  flex justify-center items-center text-center font-bold">
      <p className="text-2xl text-red-500">{error}</p>
    </motion.div>
  );
};
