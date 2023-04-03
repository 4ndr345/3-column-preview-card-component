import { Lexend_Deca } from "next/font/google";

const font = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400"],
});

interface ButtonProps {
  color: string;
}

export default function Button({ color }: ButtonProps) {
  return (
    <button
      className={`
        ${font.className} 
        bg-off-white 
        w-[146px] h-12 rounded-[25px] 
        text-[15px]/[25px] text-${color}
        hover:border-2 hover:border-off-white
        hover:text-off-white hover:bg-${color}
    `}
    >
      Learn More
    </button>
  );
}
