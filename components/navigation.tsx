import React, { FormEvent } from "react";

type Props = {
  play: (event: FormEvent<HTMLFormElement>) => void;
};

export function Navigation({ play }: Props) {
  return (
    <div className="absolute top-0 w-full h-10 p-4">
      <form onSubmit={play} className="flex flex-row items-center gap-6">
        <div className="relative max-w-sm py-5">
          <input
            type="text"
            placeholder="Text"
            name="word"
            id="word"
            required
            className="peer h-8 w-full p-3 outline-none border-b-2 border-gray-700 bg-transparent focus:border-b-green-500 text-black text-base focus:font-medium transition duration-300 placeholder-transparent"
          />

          <label
            htmlFor="word"
            className="absolute top-0 ml-3 left-0 text-lg text-gray-500 transition-all duration-200 peer-placeholder-shown:top-5 peer-focus-within:top-0 peer-focus:text-green-500 peer-placeholder-shown:cursor-text peer-focus:font-semibold"
          >
            Enter an word
          </label>
        </div>

        <button className="w-20 h-10 bg-green-500 rounded-md text-white font-medium">
          Play
        </button>
      </form>
    </div>
  );
}
