export type Steps = {
  word: {
    letter: string;
    isValid: boolean;
    index: number; // 1-indexed
  }[];
  action: "explore" | "backtracking" | "completed";
  stack: number[]; // 1-indexed stack
  depth: number; 
  solutionCount: number;
};

export const GenerateSteps = (word: string[]) => {
  const steps: Steps[] = [];
  const n = word.length;
  const stack: number[] = Array(n).fill(0); 
  const used: boolean[] = Array(n + 1).fill(false);
  let solutions = 0;

  const back = (depth: number) => {
    if (depth === n) {
     
      steps.push({
        word: stack.map((idx) => ({
          letter: word[idx - 1], 
          isValid: true,
          index: idx, 
        })),
        action: "completed",
        stack: [...stack],
        depth,
        solutionCount: solutions,
      });
      solutions++;
      return;
    }

    for (let i = 1; i <= n; i++) { 
      if (used[i]) continue;

      used[i] = true;
      stack[depth] = i; 

    
      steps.push({
        word: stack.slice(0, depth + 1).map((idx) => ({
          letter: word[idx - 1], 
          isValid: false,
          index: idx,
        })),
        action: "explore",
        stack: [...stack],
        depth,
        solutionCount: solutions,
      });

      back(depth + 1);

      used[i] = false;
      stack[depth] = 0;

      
      steps.push({
        word: stack.slice(0, depth).map((idx) => ({
          letter: word[idx - 1], 
          isValid: false,
          index: idx, 
        })),
        action: "backtracking",
        stack: [...stack],
        depth,
        solutionCount: solutions,
      });
    }
  };

  back(0);
  steps.pop(); 
  return steps.length > 0 ? steps : [];
};
