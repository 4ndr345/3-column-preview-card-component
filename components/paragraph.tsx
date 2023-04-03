import { Lexend_Deca } from "next/font/google";

const font = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${font.className} text-[15px]/[25px] text-white opacity-75`}>
      {children}
    </p>
  );
}
