import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { ItemMenu } from "./itemMenu";
import { SearchItem } from "./search";
import LogoUser from "@/assets/icon-user.svg";
import { Container } from "./container";

export function Header() {
  return (
    <header className="relative flex w-full items-center h-20 bg-primary-orange">
      <div className="absolute bg-primary-blue top-0 right-0 w-[35%] h-full z-0"></div>
      <div className="w-full max-w-[1246px] px-[15px] mx-auto">
        <Container>
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="logo" />
            <div className="flex items-center">
              <ul className="flex items-center gap-12">
                <li className="flex items-center gap-5">
                  <ItemMenu name="Para você" />
                </li>
                <li className="flex items-center gap-5">
                  <ItemMenu name="Para empresas" />
                </li>
                <li className="flex items-center gap-5">
                  <ItemMenu name="Serviços" />
                </li>
                <li className="flex items-center gap-5">
                  <ItemMenu name="Ajuda" />
                </li>
              </ul>
              <div></div>
            </div>
          </div>
          <SearchItem />
          <button className="flex items-center gap-4 bg-primary-blue h-20 pl-6 z-10">
            <Image src={LogoUser} alt="user" />
            <span className="text-white font-bold">Acessar conta</span>
          </button>
        </Container>
      </div>
    </header>
  );
}
