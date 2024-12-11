import { Wave1, Wave2 } from "./assets/icons/waves";

export const WaveSection = ({ className }: { className: string }) => {
  return (
    <div className={`${className} h-96 flex w-full `}>
      <div className="h-full w-full relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[5%] bg-[#015871]">
          <Wave2 />
          <Wave1 />
        </div>
      </div>
    </div>
  );
};
