import Image from "next/image";

interface IconProps {
  src: string;
}

export default function Icon({ src }: IconProps) {
  return (
    <Image className="mb-[35px]" src={src} width="64" height="40" alt={""} />
  );
}
