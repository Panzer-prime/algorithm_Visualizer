export type Steps = {
  word: {
    letter: string;
    isValid: boolean;
    index: number;
  }[];
  action: "explore" | "backtracking" | "completed";
  stack: number[];
  depth: number;
};

export const GenerateSteps = (word: string[]) => {
  const steps: Steps[] = [];
  const stack: number[] = Array(word.length).fill(-1);
  const used: boolean[] = Array(word.length).fill(false);

  const back = (depth: number) => {
    if (depth === word.length) {
      steps.push({
        word: stack.map((idx) => ({
          letter: word[idx],
          isValid: true,
          index: idx,
        })),
        action: "completed",
        stack: [...stack],
        depth,
      });
      return;
    }

    for (let i = 0; i < word.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      stack[depth] = i;

      steps.push({
        word: stack.slice(0, depth + 1).map((idx) => ({
          letter: word[idx],
          isValid: false,
          index: idx,
        })),
        action: "explore",
        stack: [...stack],
        depth,
      });

      back(depth + 1);

      used[i] = false;
      stack[depth] = -1;

      steps.push({
        word: stack.slice(0, depth).map((idx) => ({
          letter: word[idx],
          isValid: false,
          index: idx,
        })),
        action: "backtracking",
        stack: [...stack],
        depth,
      });
    }
  };

  back(0);
  return steps;
};
