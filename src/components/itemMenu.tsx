import ArrowDown from "@/assets/arrow-down.svg";
import Image from "next/image";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
      <button className="flex items-center gap-4">
        
        <span className="text-white font-bold">{name}</span>
        <Image src={ArrowDown} alt="arrowDown" />
      </button>
  );
}
