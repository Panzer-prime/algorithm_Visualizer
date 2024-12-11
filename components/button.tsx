type ButtonProps = {
  text: string;
  href: string;
  primary: boolean;
};

export const AButton: React.FC<ButtonProps> = ({ text, href, primary }) => {
  const primaryStyles = primary
    ? "bg-[#FFB703] text-white hover:bg-[#FFCF57]"
    : "border-2 border-[#FFB703] text-[#FFB703] hover:bg-[#FFB703] hover:text-white";
  const hoverEffect = primary
    ? "group-hover:text-[#FFB703]"
    : "group-hover:text-white";

  return (
    <div className="relative w-36 h-10 group overflow-hidden">
      <a
        href={href}
        className={`w-36 h-10 flex items-center justify-center rounded text-lg font-semibold p-4 transition-all duration-300 ${primaryStyles}`}
      >
        <span className={`${hoverEffect} group-hover:z-50`}>{text}</span>
      </a>
      <div
        className={`absolute w-full h-full rounded transition-all duration-300 ${
          primary ? "bg-white border-2 border-[#FFB703]" : "bg-[#FFB703]"
        } group-hover:-translate-y-10`}
      ></div>
    </div>
  );
};
