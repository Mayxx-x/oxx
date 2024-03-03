import { HomeIcon } from "../assets/oxx_icons"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export const MainHeader = () => {
    const goHome = () => {
        window.location.href = '/'
    }

    return (<>
        <header className="h-20 flex justify-center items-center border border-slate-800 text-white">
            <Popover className='h-full p-1'>
                <PopoverTrigger>
                    <img src="/oxx_logo.png" alt="" className="h-20 p-3 hover:bg-slate-500 rounded-xl" />
                </PopoverTrigger>

                <PopoverContent className='bg-[#0e0e1ba8] border-none text-white backdrop-blur'>
                    <div className="h-96">
                        <ul className="w-full grid space-y-5">
                            <li onClick={() => goHome()}
                                className="flex items-center h-10 fill-[#b222c5] p-2 gap-x-3 cursor-pointer hover:bg-slate-500 rounded-lg"
                            >
                                <HomeIcon />
                                Home
                            </li>
                            <Separator />
                        </ul>
                    </div>
                </PopoverContent>
            </Popover>
        </header>
    </>)
}