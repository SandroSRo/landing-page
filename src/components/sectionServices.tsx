import Image from "next/image";
import { Container } from "./container";
import PhoneIcon from "@/assets/icon-phone.svg"
import CardIcon from "@/assets/icon-card.svg"
import SolutionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import Phone from "@/assets/phone.png"

export function SectionService(){
    return(
        <section className="relative w-full h-[965px] pt-32">
            <Container>
                <div className="flex-1 max-w-[594px]">
                    <span className="text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h1>
                    <p className="text-lg max-w-[584px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de 
                        forma segura , rápida e o melhor, no conforto da sua casa</p>
                <ul className=" flex flex-col items-start gap-9">
                    <li className="flex items-center gap-7 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center">
                        <Image src={PhoneIcon} alt="phone"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferência e pagamentos de onde estiver</p>
                    </li>
                    <li className="flex items-center gap-7 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center">
                        <Image src={SolutionsIcon} alt="phone"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Soluções de empréstimos e renegociação para organizar suas finanças</p>
                    </li>
                    <li className="flex items-center gap-7 pb-9 border-b-[1px] border-opacity-gray">
                        <div className="w-7 h-7 flex items-center">
                        <Image src={OptionsIcon} alt="phone"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimentos, de acordo com o seu perfil de investidor.</p>
                    </li>
                    <li className="flex items-center gap-7">
                        <div className="w-7 h-7 flex items-center">
                        <Image src={CardIcon} alt="phone"/>
                        </div>
                        <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual</p>
                    </li>
                </ul>
                </div>
            </Container>
            <div className="absolute flex items-center top-0 right-0 w-[32%] h-full bg-gray-phone ">
                <Image src={Phone} alt="phone" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}
