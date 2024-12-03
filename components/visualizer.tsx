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
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-xl">Visualizer</p>
          <div className="flex flex-row gap-7">
            {step &&
              step.word.map((item, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 relative ${
                    item.isValid ? "bg-green-500" : "bg-red-500"
                  } rounded-md flex items-center justify-center text-5xl text-white`}
                >
                  {item.letter}{" "}
                  <span className="text-sm font-medium absolute -top-4 bg-[#9FDC9F] w-6 h-6 rounded-full flex items-center justify-center text-white">
                    {item.index}
                  </span>
                </div>
              ))}
          </div>

          <div>
            <p className="font-semibold text-xl">Siva</p>
            <div className="flex flex-row gap-7">
              {step &&
                step.stack.map((item, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 text-5xl bg-gray-200 rounded flex items-center justify-center"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-5xl font-semibold text-red-500">Error :(</p>
      )}
    </div>
  );
}
