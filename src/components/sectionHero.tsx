import { Container } from "./container";
import LogoApple from "@/assets/btn-apple-store.svg";
import LogoAndroid from "@/assets/btn-google-play.svg";
import Image from "next/image";
import ArrowExplorer from "@/assets/arrow-explorer.svg"
import Woman from "@/assets/woman.png"

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img-bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-7xl font-bold mb-4">
            Tenha seu banco na palma da sua mão .
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um ó lugar. Simples que,
            completo e feito pra você.
          </p>
        <div className="flex gap-4 mb-24">
            <button>
          <Image src={LogoApple} alt={"aplle"}></Image>
            </button>
            <button>
          <Image src={LogoAndroid} alt={"android"}></Image>
            </button>
        </div>
        <button className='flex items-center gap-3'>
          <Image src={ArrowExplorer} alt={"explorer"}></Image>
          <span className="text-white text-sm ">Continue explorando</span>
            </button>
        </div>
        <Image src={Woman} alt='woman'/>
      </Container>
    </section>
  );
}
