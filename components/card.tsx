import Paragraph from "./paragraph";
import Heading from "./heading";
import Icon from "./icon";
import Button from "./button";

interface CardProps {
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
        first:rounded-tl-lg first:rounded-tr-lg
        last:rounded-bl-lg last:rounded-br-lg
        md:w-[307px] md:h-[500px]
        md:first:rounded-tr-none md:first:rounded-bl-lg
        md:last:rounded-tr-lg md:last:rounded-bl-none
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
