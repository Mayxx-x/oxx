import { HomeIcon } from "../assets/oxx_icons"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { GetProductModal } from "./mod/GetProductModal"
import { TermsAndConditions } from "./mod/TermsAndConditions"

export const MainHeader = () => {
    const [getProdOpen, setGetProdOpen] = useState(false)
    const goHome = () => {
        window.location.href = '/'
    }

    return (<>
        <header className="h-20 flex justify-center gap-x-10 items-center border border-slate-800 text-white">

            {/* Trigger do modal de contato */}
            <div className="cursor-pointer hover:bg-[#4a4aa838]">
                <TermsAndConditions>
                    <span className="flex items-center space-x-3 cursor-pointer p-5 hover:bg-[#30305cd7] rounded-lg">
                        <span className="w-8 p-1">
                            <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>
                        </span>
                        <span> Termos </span>
                    </span>
                </TermsAndConditions>
            </div>

            <Popover className='h-full p-1'>
                <PopoverTrigger>
                    <img src="/oxx_logo.png" alt="" className="h-20 p-3 hover:bg-[#363669] rounded-xl" />
                </PopoverTrigger>

                <PopoverContent className='bg-[#0e0e1ba8] border-none text-white backdrop-blur'>
                    <div className="h-96">
                        <ul className="w-full grid space-y-5">
                            <li onClick={() => goHome()}
                                className="flex items-center h-10 fill-[#b222c5] p-7 gap-x-3 cursor-pointer hover:bg-[#4a4aa838] rounded-lg"
                            >
                                <HomeIcon />
                                Home
                            </li>
                            <Separator />
                        </ul>
                    </div>
                </PopoverContent>
            </Popover>

            {/* Trigger do modal de contato */}
            <div className="">
                <GetProductModal />
            </div>
        </header>
    </>)
}