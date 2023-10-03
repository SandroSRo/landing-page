import Image from "next/image";
import SearchLogo from "@/assets/icon-search.svg"

export function SearchItem(){
    return(
        <div className="flex items-center gap-4 pr-6">
            <Image src={SearchLogo} alt="Search"
            />
            <input type="text" className="text-white bg-transparent outline-none placeholder:text-white" placeholder="Buscar"></input>
        </div>
    )
}
