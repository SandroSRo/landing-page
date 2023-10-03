import { SectionHero } from "@/components/sectionHero";
import { SectionService } from "@/components/sectionServices";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionService />
    </>
  );
}
