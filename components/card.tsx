import Paragraph from "./paragraph";
import Heading from "./Heading";
import Icon from "./icon";
import Button from "./button";

export interface CardProps {
  color: string;
  icon: string;
  title: string;
  copy: string;
}

export default function Card({ color, icon, title, copy }: CardProps) {
  return (
    <div
      className={`
        bg-${color}
        p-12 
        w-[327px] h-[442px]
        flex flex-col justify-between  
        [&:first-child]:rounded-tl-lg [&:first-child]:rounded-tr-lg
        [&:last-child]:rounded-bl-lg [&:last-child]:rounded-br-lg
        md:w-[307px] md:h-[500px]
        md:[&:first-child]:rounded-tr-none md:[&:first-child]:rounded-bl-lg
        md:[&:last-child]:rounded-tr-lg md:[&:last-child]:rounded-bl-none
      `}
    >
      <div>
        <Icon src={`/${icon}`} />
        <Heading>{title}</Heading>
        <Paragraph>{copy}</Paragraph>
      </div>
      <Button color={color} />
    </div>
  );
}
