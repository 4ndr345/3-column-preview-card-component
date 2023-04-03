import { Big_Shoulders_Display } from "next/font/google";

const font = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`mb-[25px] ${font.className} font-bold text-[40px]/[48px] text-off-white uppercase`}
    >
      {children}
    </h1>
  );
}
