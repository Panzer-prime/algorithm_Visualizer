import { WaveSection } from "../wave";
import { AButton } from "../button";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center ">
      <WaveSection className="absolute top-0 left-0 rotate-180" />

      <div className="flex flex-col gap-7 text-center w-[609px] items-center ">
        <div className="flex flex-col gap-1">
          <h3 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-[#0F4856] inline-block text-transparent bg-clip-text p-2">
            Backtracking
          </h3>
          <p className="font-semibold text-xl text-[#219EBC]">
            Descoperă arta de a găsi soluții pas cu pas prin încercare și eroare
            controlată.
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <AButton text="Let's Start" href="" primary={true} />
          <AButton text="Visualizer" href="/visualizer" primary={false} />
        </div>
      </div>
      <WaveSection className="absolute bottom-0 left-0 " />
    </section>
  );
}
