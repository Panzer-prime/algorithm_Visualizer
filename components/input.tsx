import { Dispatch, SetStateAction } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
};

export const Input = ({ setValue, value }: Props) => {
  return (
    <div className="w-72 flex flex-col gap-2">
      <input
        type="range"
        className="accent-green-500"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min={1}
        max={10}
      />
      <div className="flex flex-row justify-between w-full font-medium text-green-500 text">
        <p>Speed</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
};
