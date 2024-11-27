export function BacktrackingTree() {
  return (
    <div className="w-1/3 h-dvh flex items-center justify-center ">
      <div className="w-96 bg-white h-[450px] flex flex-col ">
        <div className="h-4/5 w-full flex items-center justify-center">3</div>
        <div className="h-1/5 w-full flex flex-row gap-4 items-center justify-center bg-neutral-100">
          <p className="text-green-500 font-medium text-base">Speed</p>
          <input
            type="range"
            min={0}
            max={10}
            className="w-60 h-3 accent-green-500"
          />
        </div>
      </div>
    </div>
  );
}
