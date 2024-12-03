import { Dispatch, forwardRef, SetStateAction } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
  className: string;
};

export const Input = forwardRef<HTMLDivElement, Props>(
  ({ setValue, value, className = "" }, ref) => {
    return (
      <div
        className={`${className}  h-72 w-4 p-4 flex flex-col gap-3 rounded bg-white items-center`}
        ref={ref}
      >
        <div className="relative flex items-center justify-center  h-72 w-4">
          <div className="absolute w-full h-full bg-[#D9D9D9] rounded-md">
            <div
              className="absolute bottom-0 w-full max-h-full bg-Mainblue rounded-md transition-all duration-100"
              style={{ height: `${value * 10}%` }}
            ></div>
          </div>
          <input
            type="range"
            className="appearance-none opacity-0 absolute w-full h-full cursor-pointer "
            value={value}
            min={1}
            max={10}
            onChange={(e) => setValue(Number(e.currentTarget.value))}
            style={{
              transformOrigin: "center",
              WebkitAppearance: "slider-vertical",
            }}
          />
        </div>

        <p className="font-semibold text-base text-Mainblue">{value}</p>
      </div>
    );
  }
);

Input.displayName = "speedInput";
