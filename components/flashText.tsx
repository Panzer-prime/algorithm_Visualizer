export const FlashText = ({ title }: { title: string }) => {
  return (
    <p className="flex flex-row gap-2 items-center text-[#05AAE2] font-semibold text-4xl">
      <span className="w-5 h-11 bg-[#05AAE2] rounded"></span>
      <span>{title}</span>
    </p>
  );
};
