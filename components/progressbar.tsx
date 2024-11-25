export function ProgressBar({
  currentSteps,
  totalSteps,
}: {
  currentSteps: number;
  totalSteps: number;
}) {
  const progress = (currentSteps / totalSteps) * 100;

  return (
    <div className="w-[31.25rem] h-4 bg-black rounded-md">
      <div
        style={{ width: `${progress}%` }}
        className="h-4 bg-green-500 rounded-md transition-all duration-200 max-w-full"
      ></div>
    </div>
  );
}
